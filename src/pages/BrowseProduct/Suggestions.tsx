import React from "react";
import SuggestionProductCard from "./SuggestionProductCard";

const Suggestions = () => {
  return (
    <div className="mt-20">
      <div className="mb-4">
        <span className="font-bold text-3xl">
          <p>You May Also Like</p>
        </span>
      </div>

      {/* products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SuggestionProductCard />
        <SuggestionProductCard />
        <SuggestionProductCard />
        <SuggestionProductCard />

      </div>
    </div>
  );
};

export default Suggestions;
