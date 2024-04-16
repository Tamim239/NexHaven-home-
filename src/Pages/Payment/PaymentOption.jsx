import { Helmet } from "react-helmet-async";
import { usePaymentInputs } from "react-payment-inputs";

export default function PaymentInputs() {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();

  return (
    <div className="lg:w-1/3 md:mx-auto border-2 p-5 shadow-2xl">
      <Helmet>
        <title>payment</title>
      </Helmet>
      <h1 className="text-center text-4xl mb-2">Provide Details</h1>
      <div className="flex flex-col *:py-2 *:px-2 *:mb-2">
        <input type="text" placeholder="Name on Card" />
        <input {...getCardNumberProps()} />
        <input {...getExpiryDateProps()} />
        <input {...getCVCProps()} />
        <input type="text" placeholder="ZIP" />
        {meta.isTouched && meta.error && <span className="text-red-500">Error: {meta.error}</span>}
      </div>
      <div className="text-center">
      <button
        type="submit"
        className="btn text-white text-base bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"
      >
        Add Card
      </button>
      </div>
    </div>
  );
}
