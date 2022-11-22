import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shered/Loading/Loading';
     
     const CheckoutForm = ({booking}) => {
        const stripe = useStripe();
        const elements = useElements();

        const [cardError, setCardError] = useState('');
        const [success, setSuccess] = useState('');
        const [transactionId, setTransactionId] = useState('');

        const [processing, setProcessing] = useState(false);

        const  [clientSecret, setClientSecret] = useState('');
        
        const {price, email, treatment, patient, _id} = booking;

        useEffect(() => {
            // Create PaymentIntent as soon as the page loads
            fetch("https://doctors-portal-server-nine-xi.vercel.app/create-payment-intent", {
              method: "POST",
              headers: { 
                "Content-Type": "application/json" ,
                 authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify({price}),
            })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
          }, [price]);
          console.log(clientSecret)

        const handleSubmit = async(event) => {
            event.preventDefault();
            if(!stripe || !elements){
                return
            };
            const card = elements.getElement(CardElement);
            if(card === null){
                return;
            }
            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });
            if(error){
                console.log(error);
                setCardError(error.message)
            }else{
                setCardError('')
            }
            setSuccess('');
            setProcessing(true);
            
            const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
                clientSecret, // parameter
                {
                  payment_method: {
                    card: card,
                    billing_details: {
                      name: patient,
                      email: email,
                    },
                  },
                },
              );
              if(processing){
                return <Loading />
              }
              if(confirmError){
                setCardError(confirmError.message);
                setProcessing(false);
                return;
              }
              if(paymentIntent.status === "succeeded"){
                
                // store payment info in the data base
                const payment = {
                    price,
                    transactionId: paymentIntent.id,
                    bookingId: _id,
                    email
                }
                fetch('https://doctors-portal-server-nine-xi.vercel.app/payments', {
                    method: 'POST', 
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(payment)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        setSuccess('Congress! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
                
              }
              
              console.log('payment', paymentIntent);
              
              setProcessing(false)
        }
        
        

        return (
            <div>
                <form onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                            style: {
                                base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                                },
                                invalid: {
                                color: '#9e2146',
                                },
                            },
                            }}
                        />
                        <button type="submit" className='btn btn-sm mt-4' disabled={!stripe || !clientSecret || processing}>
                            Pay
                        </button>
                    </form>
                    <p className='text-red-500 mt-4'>{cardError}</p>
                    {
                        success && <div>
                            <p className='text-green-500'>{success}</p>
                            <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                        </div>
                    }
            </div>
        );
     };
     
     export default CheckoutForm;