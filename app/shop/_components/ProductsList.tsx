"use client";
import React, { useEffect, useState } from "react";
import LoadProductList from "./LoadProductList";
import axios from "axios";
import ProductCard from "@/components/main/product-card";

import qs from "query-string";
import { useFilter } from "@/hooks/useFilter";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loadProducts, setLoadProduct] = useState(true);

  const filteredData = useFilter();

  const categoryName = filteredData?.filteredData?.category?.name;

  useEffect(() => {
    const getProducts = async () => {
      const url = "/api/product";
      try {
        setLoadProduct(true);
        const response = await axios.get(url);
        const data = response.data;

        setProducts(data);
      } catch (error) {
        console.log(error);
        setLoadProduct(true);
      } finally {
        setLoadProduct(false);
      }
    };

    getProducts();
  }, []);

  console.log("Products: ", products);

  return (
    <div className="px-3 py-5">
      {loadProducts ? (
        <LoadProductList />
      ) : (
        <div className="">
          <h2>{categoryName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 3xl:grid-cols-5 gap-2">
            {products?.map((product: any, i: number) => (
              <ProductCard key={product._id} index={i} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
