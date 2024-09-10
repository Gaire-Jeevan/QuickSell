
const RecentSales = () => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h3 className="font-medium text-3xl">Recent Sales</h3>
      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <div className="flex flex-col">
            <h4 className="text-lg">Antique Vase</h4>
            <p>Order #12348</p>
          </div>
          <span className="text-lg font-medium">$149.99</span>
        </div>

        <div className="flex justify-between mb-2">
          <div className="flex flex-col">
            <h4 className="text-lg">Leather Backpack</h4>
            <p>Order #12349</p>
          </div>
          <span className="text-lg font-medium">$79.99</span>
        </div>

      </div>
    </div>
  )
}

export default RecentSales