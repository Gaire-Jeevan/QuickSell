import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineTune } from "react-icons/md";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../pages/BrowseProduct/productCard";

const BrowseProductPage = () => {
  // categories array for checkbox
  const categories = ["Audio", "Phones", "Computers", "Wearables", "TVs"];

  return (
    // the outer bracket is for the color of page
    <div className="bg-[#f9fafb]">
{/* Navbar */}
<NavBar showFullNav={false} />

      <div className="m-2 my-4">
        <span>
          <h2 className="text-3xl font-bold">Browse Product</h2>
        </span>

        {/* search button */}
        <div className="relative my-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch size={20} className="text-gray-500" />
          </span>
          <input
            type="text"
            className="form-control pl-10 py-3 w-full border rounded-lg text-xl"
            aria-label="Large"
            id="search"
            name="search"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search Products..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* Displaying side panel */}

          <aside className="mt-3 hidden md:block">
            <h3 className="text-2xl font-medium">Categories</h3>

            <div className="mt-2 space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="form-check  text-lg font-medium">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`${category}Checkbox`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${category}Checkbox`}
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
            {/* Price range */}
            <div className="mt-5 space-y-3">
              <span>
                <h3 className="text-2xl font-medium">Price Range</h3>
              </span>

              <input type="range" min="0" max={1500} className="w-4/5" />

              <span className="flex justify-between w-4/5 font-medium mt-0">
                <p>$0</p>
                <p>$1500</p>
              </span>
            </div>
          </aside>

          <div className="md:col-span-2 lg:col-span-3">
            {/* in smaller screen */}
            <div className="flex justify-between items-center mb-4 ">
              {/* for Filter */}
              <span>
                <p className="">7 products found</p>
              </span>
              <span className="p-1 flex gap-2 justify-center items-center shadow-lg rounded-md bg-[#fff]  transform transition-transform duration-300 hover:scale-110 md:hidden">
                <MdOutlineTune />
                <p>Filters</p>
              </span>

              {/* for down chevron */}
              <span className="p-1 flex gap-2 justify-between items-center shadow-lg rounded-md bg-[#fff] transform transition-transform duration-300 hover:scale-110 ">
                <p className="">Sort by</p>
                <FaChevronDown size={15} />
              </span>
            </div>

            {/* Displaying Product */}
            <div className="col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default BrowseProductPage;
