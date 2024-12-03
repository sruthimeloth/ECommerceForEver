import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const {currency} = useContext(ShopContext);

  return (
    <Link  className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      
      
      <div className="overflow-hidden">
        <img className="hover:scale-110 transition ease-in-out"  src={image[0]} alt="" />

      {/* <img
  className="hover:scale-110 transition ease-in-out"
  src={image && image.length > 0 ? image[0] : "path/to/fallback-image.png"}
  alt={name}
/>  */}

        
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;



