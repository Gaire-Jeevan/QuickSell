
const RecentPurchases = () => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h3 className="font-medium text-3xl">Recent Purchases</h3>
      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <div className="flex flex-col">
            <h4 className="text-lg">Classic Leather Shoes</h4>
            <p>Order #12345</p>
          </div>
          <span className="text-lg font-medium">$59.99</span>
        </div>

        <div className="flex justify-between mb-2">
          <div className="flex flex-col">
            <h4 className="text-lg">Designer Handbag</h4>
            <p>Order #12346</p>
          </div>
          <span className="text-lg font-medium">$89.99</span>
        </div>

        <div className="flex justify-between mb-2">
          <div className="flex flex-col">
            <h4 className="text-lg">Vintage Camera</h4>
            <p>Order #12347</p>
          </div>
          <span className="text-lg font-medium">$29.99</span>
        </div>
      </div>
    </div>
  );
};

export default RecentPurchases;
