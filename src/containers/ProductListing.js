import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./ProductComponent";

import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });

    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
};
export default ProductListing;
