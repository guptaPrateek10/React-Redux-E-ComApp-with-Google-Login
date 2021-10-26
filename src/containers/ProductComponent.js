import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponents = () => {
  // useSelector is used to get the state into the products variable
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    //Deconstructing the product object
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        {/* //here we are passing the productid to the productDetail components */}
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};
export default ProductComponents;
