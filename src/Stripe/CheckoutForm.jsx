
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import './CheckoutForm.css';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import { AuthContext } from '../ContextProvider/ContextProvider';
import axios from 'axios';

const CheckoutForm = ({ details }) => {

    const stripe = useStripe();
    const elements = useElements();

    const { user } = useContext(AuthContext);

    const handlePay = () => {
        // Swal.fire({
        //     title: "Payment Successful",
        //     text: "You successfully registered for the contest",
        //     icon: "success"
        // });
    }

    const [clientSecret, setClientSecret] = useState();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);


    useEffect(() => {
        if (details?.Price > 0) {

            getClientSecret({ price: details?.Price });
        }
    }, [details])


    const getClientSecret = async (price) => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, price)
        console.log('clientSecret From server', data);
        setClientSecret(data.clientSecret);
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setProcessing(true)

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
            return;
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        //confirm payment

        const {error: confirmError, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                },
            }, })

            if(confirmError){
                console.log('[error]', confirmError);
                setCardError(confirmError.message);
                setProcessing(false);
                return;
            }

            if(paymentIntent.status === 'succeeded'){
                console.log(paymentIntent)
                // 1: Create payment Info object
                // 2: save payment info in booking collection db
                // 3: update booking status to paid

                const paymentInfo = {
                    ...details,
                    transactionId: paymentIntent.id,
                    date: new Date(),

                }

                console.log(paymentInfo)


                await axiosSecure.post('/booking', paymentInfo)

                const count = details?.participantsCount;
                const addCount = parseInt(count) + 1;
                console.log(addCount);


                 await axiosSecure.patch(`/count/update/${details?._id}`, {addCount});

                
                
            }
    };

    return (
        <>

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
                <button onClick={handlePay} type="submit" disabled={!stripe || !clientSecret || processing} className="flex mr-auto text-white bg-gradient-to-r from-indigo-400 to-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Pay {details?.Price}$
                </button>
            </form>

            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </>
    );
};

export default CheckoutForm;
