import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import ServingHumanity from "./ServingHumanity";
import DonateBanner from "./DonateBanner";
import headingIcon from "../assets/icon.png";

const Donate = () => {
  const stripePromise = loadStripe(
    "pk_test_51Qp2bI4Q2hkhUg16UjtAtAPPObZRj2PBJgIpIm9KSVi4C6ru5ULNdUWyaymbTC3KtCr6Y7aN5cogknkkpYsFfJvk007Oxtb6j4"
  );

  return (
    <>
      <Elements stripe={stripePromise}>
        <DonateBanner />
        <div className="d-flex justify-content-center align-items-center gap-2 md:ml-0 ml-5  pt-16">
          <img src={headingIcon} className="h-12" alt="icon" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl fw-bold primaryColor ">
            {" "}
            Serving Humanity Through Spirituality!
          </h2>
          <img src={headingIcon} className="h-12" alt="icon" />
        </div>

        <div className="py-2 text-center sm:text-left">
  <p className="px-14 text-gray-600 text-sm sm:text-base md:text-lg mb-4">
    At SSSG Global, we believe that spirituality transcends religious
    and cultural differences. Our work is driven by the universal
    principles of compassion, generosity, and service to humanity.
    Through the Ashtalakshmi Puja, we aim not only to invoke material
    and spiritual prosperity but also to inspire a deeper connection to
    the divine, fostering peace, harmony, and gratitude in every
    participant&apos;s life.
  </p>
  
  <p className="px-14 text-gray-600 text-sm sm:text-base md:text-lg">
    In a world longing for balance and meaning, SSSG Global stands as a
    bridge between ancient wisdom and modern living, inviting people of
    all beliefs to partake in the light of spirituality and the
    blessings of divine grace. Together, let us preserve these sacred
    traditions and build a future filled with abundance, harmony, and
    hope.
  </p>

  <div className="d-flex justify-content-center align-items-center gap-2">
    {/* <img src={headingIcon} className="h-14" alt="icon" /> */}
    <h2 className="text-xl sm:text-xl md:text-xl fw-bold primaryColor">
      Your Contribution Builds a Stronger Community!
    </h2>
    {/* <img src={headingIcon} className="h-14" alt="icon" /> */}
  </div>
</div>


        <div className="-">
          <div className="w-full md:w-2/2">
            <ServingHumanity />
          </div>
          <div className="w-full md:w-2/2 mt-4 md:mt-0">
            {/* <CheckoutForm /> */}
          </div>
        </div>
      </Elements>
    </>
  );
};

export default Donate;
