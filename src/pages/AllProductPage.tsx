import GetProduct from "../components/GetProduct";
import NavBar from "../components/NavBar";

const AllProductPage = () => {
  return (
    <div>
      <NavBar showFullNav={false} />
      <div className="m-2 md:m-5">
        {/* <ProductDisplayCard /> */}
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search for products"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div>
          <GetProduct />
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;
