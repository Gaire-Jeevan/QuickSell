import React from 'react'

const NewMessages = () => {
  return (
    <div className="rounded-lg shadow-lg p-4 ">
    <h3 className="font-medium text-3xl">New Messages</h3>
    <div className="mt-4">
      <div className="flex justify-between mb-2">
        <div className="flex flex-col">
          <h4 className="text-lg">Question about product</h4>
          <p>buyer@example.com</p>
        </div>
        <span className="text-lg font-medium">1 hour ago</span>
      </div>

      <div className="flex justify-between mb-2">
        <div className="flex flex-col">
          <h4 className="text-lg">Order confirmation</h4>
          <p>buyer@example.com</p>
        </div>
        <span className="text-lg font-medium">2 days ago</span>
      </div>

    </div>
  </div>
  )
}

export default NewMessages