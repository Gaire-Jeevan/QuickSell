import { Link } from "react-router-dom";

interface Props {
  showFullNav: boolean;
}

const NavBar = ({ showFullNav }: Props) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mx-4 my-2">
        <Link to="/" className="text-lg font-bold">QuickSell</Link>

        {showFullNav && (
          <>
            <ul className="hidden lg:flex lg:flex-row lg:space-x-16">
              <Link to="/home" className="list-item hover:underline font-bold">Home</Link>
              <Link to="/browseProduct" className="list-item hover:underline font-bold">
                Browse Product
              </Link>
              <Link to="/sell" className="list-item hover:underline font-bold">
                Sell Your Product
              </Link>
              <Link to="/aboutUs" className="list-item hover:underline font-bold">About Us</Link>
              <Link to="/contactUs" className="list-item hover:underline font-bold">Contact Us</Link>
            </ul>

            <div className="flex w-44 justify-between">
              <Link to="/signup" className="btn btn-success m-0 h-auto">Sign Up</Link>
              <Link to="/login" className="btn btn-primary h-auto">Log In</Link>
            </div>
          </>
        )}
      </div>
      <hr />
    </>
  );
};

export default NavBar;
