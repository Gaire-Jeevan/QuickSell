import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="shadow-md p-4  mt-3  lg:grid lg:grid-cols-2 ">
        <div>
          <form action="">
            <div className="form-group lg:mt-10 mb-3 text-sm lg:text-lg">
              <label htmlFor="name" className="text-base font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="form-control rouded-md   h-12   text-sm"
                id="name"
                aria-describedby="name_contactUs"
                maxLength={75}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group mt-4 lg:mt-10 mb-3 text-sm lg:text-lg">
              <label htmlFor="email" className="text-base font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="form-control rouded-md   h-12   text-sm"
                id="email"
                aria-describedby="email_contactUs"
                maxLength={75}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group mt-4 lg:mt-10 mb-3 text-sm lg:text-lg">
              <label htmlFor="subject" className="text-base font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                className="form-control rouded-md   h-12   text-sm"
                id="subject"
                aria-describedby="email_contactUs"
                maxLength={75}
                placeholder="Enter the subject"
              />
            </div>

            <div className="form-group mb-2 text-sm lg:text-lg">
              <label
                htmlFor="productDescription"
                className="text-base font-medium mb-2"
              >
                Message
              </label>
              <textarea
                className="form-control text-sm"
                id="productDescription"
                rows={5}
                maxLength={75}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-[#e11d48] rounded-md text-white font-medium text-base lg:text-lg h-12 w-30 mt-2 lg:mt-10"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="mt-10 lg:ml-20">
          <h2 className="font-bold text-2xl">Customer Support</h2>
          <div className="mt-2">
            <h3 className="font-bold text-xl mb-1">Email</h3>
            <Link to="/">support@quicksell.com</Link>
          </div>
          <div className="mt-2">
            <h3 className="font-bold text-xl mb-1">Phone</h3>
            <Link to="/">+1(555)123-4567</Link>
          </div>
          <div className="mt-2">
            <h3 className="font-bold text-xl mb-1">Live Chat</h3>
            <p>Monday - Friday, 9am - 5pm IST</p>
            <button className="btn btn-outline-primary mt-1">Start Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
