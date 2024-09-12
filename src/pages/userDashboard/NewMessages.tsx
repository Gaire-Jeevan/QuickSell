const NewMessages = () => {
  return (
    <div className="mt-5 shadow-lg rounded-lg p-4 bg-[#fff]">
      <div className="mb-5 space-y-1">
        <h3 className="text-2xl md:text-4xl font-bold">New Messages</h3>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between items-center shadow-lg p-4 rounded-lg bg-[#fff]">
          <div className="flex flex-col">
            <h4 className="text-base md:text-xl font-medium">Question about product</h4>
            <p className="text-sm md:text-lg">buyer@example.com</p>
          </div>

          <div>
            <p className="text-base md:text-xl font-medium xxs:ml-4 md:ml-0">1 hour ago</p>
          </div>
        </div>

        <div className="flex justify-between items-center shadow-lg p-4 rounded-lg bg-[#fff]">
          
            <div className="flex flex-col">
              <h4 className="text-base md:text-xl font-medium">Order confirmation</h4>
              <p className="text-sm md:text-lg">buyer@example.com</p>
            </div>
          
          <div className="flex flex-col">
            
            <p className="text-base md:text-xl font-medium xxs:ml-4 md:ml-0">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessages;
