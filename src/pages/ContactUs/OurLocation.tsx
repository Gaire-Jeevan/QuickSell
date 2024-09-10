
const OurLocation = () => {
  return (
    <div className="shadow-md p-4 mt-10">
      <h3 className="font-bold text-2xl">Our Location</h3>
      <div className=" lg:grid lg:grid-cols-2">
        <div className="mt-3">
          <h4 className="font-bold text-xl mb-1">Address</h4>
          <p>Mullana, Ambala</p>
          <p>India, 133207</p>
        </div>

        <div className="mt-3">
          <h4 className="font-bold text-xl mb-1">Hours of Operation</h4>
          <p>Monday - Friday: 9am - 5pm IST</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
