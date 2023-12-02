import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {

    //TODO: add publishable key
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    console.log(stripePromise);
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;