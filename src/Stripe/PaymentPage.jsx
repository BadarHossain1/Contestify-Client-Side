import { useLoaderData } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PaymentPage = () => {

    const data = useLoaderData();
    console.log(data);

    const details = data[0];

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);



    return (
        <div>
            <section className="body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font  tracking-widest">{details?.Category}</h2>
                            <h1 className=" text-3xl title-font font-medium mb-4">{details?.Name}</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                
                            </div>
                            <p className="leading-relaxed mb-4">{details?.Description}</p>

                            
                            <div className="flex">
                                <span className="title-font font-medium text-2xl "> Registration Fee: <span className="text-green-400">{details?.Price}$$</span></span>
                                
                                
                            </div>
                            <Elements stripe={stripePromise}><CheckoutForm details={details}></CheckoutForm></Elements>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={details?.Image}></img>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentPage;