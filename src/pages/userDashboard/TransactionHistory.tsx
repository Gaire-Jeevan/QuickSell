
const TransactionHistory = () => {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-3xl">Transaction History</h3>
      <div>
        <div></div>
        <table className=" w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="w-1/3">Amount</th>
              <th className="w-1/3">Date</th>
              <th className="w-1/3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 ">
              <td className="p-3">$59.99</td>
              <td className="p-3">04/15/2023, 12:34:56 PM</td>
              <td className="p-3">
                <div className="flex flex-col">
                  <h5>#12345</h5>
                  <p>Visa ending in 1234 - Completed</p>
                  <p>Classic Leather Shoes</p>
                </div>
              </td>
            </tr>

            <tr className="border-b border-gray-300 ">
              <td className="p-3">$89.99</td>
              <td className="p-3">03/20/2023, 09:45:12 AM</td>
              <td className="p-3">
                <div className="flex flex-col">
                  <h5>#12346</h5>
                  <p>PayPal - Completed</p>
                  <p>Designer Handbag</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
