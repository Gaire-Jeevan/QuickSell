import sofa from "../../assets/sofaSet.png";

const SuggestionProductCard = () => {
  return (
    <div className="shadow-lg rounded-lg  transform transition-transform hover:scale-110   ">
      {/* picture of image */}
      <span className="">
        <img src={sofa} alt="" className="rounded-t-lg" />
      </span>

      {/* product description */}
      <div className="p-3 flex flex-col space-y-2" >
        <span className="  md:text-xl font-medium">
          <h4>Related Product 1</h4>
        </span>

        <span className="text-lg lg:text-xl">
          <p>Brief description of the product</p>
        </span>

        <span className="font-bold text-xl">
          <p>$99.99</p>
        </span>
      </div>
    </div>
  );
};

export default SuggestionProductCard;
