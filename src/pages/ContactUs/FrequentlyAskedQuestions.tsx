
const FrequentlyAskedQuestions = () => {
  return (
    <div className="shadow-md mt-10 p-3">
      <h3 className="font-bold text-2xl">Frequently Asked Questions</h3>
      <div className=" lg:grid lg:grid-cols-2 gap-4">
        <div className="mt-4 mb-4">
          <h4 className="font-bold text-xl mb-2">
            How do I become a seller on QuickSell?
          </h4>
          <p className="text-lg">
            To become a seller on QuickSell, simply sign up for a seller account
            on our website and follow the onboarding process. Our team will
            review your application and get you set up to start selling.
          </p>
        </div>

        <div className="mt-4 mb-4">
          <h4 className="font-bold text-xl mb-2">
            What is your return policy?
          </h4>
          <p className="text-lg">
            We have a 30-day return policy for all items purchased on QuickSell.
            If you're not satisfied with your purchase, you can initiate a
            return and our team will assist you with the process.
          </p>
        </div>

        <div className="mt-4 mb-4">
          <h4 className="font-bold text-xl mb-2">How do I track my order?</h4>
          <p className="text-lg">
            You can track the status of your order by logging into your
            QuickSell account and navigating to the "Orders" section. There,
            you'll find the tracking information for your shipment.
          </p>
        </div>

        <div className="mt-4 mb-4">
          <h4 className="font-bold text-xl mb-2">
            Do you offer international shipping?
          </h4>
          <p className="text-lg">
            No, currently we don't support international shipping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
