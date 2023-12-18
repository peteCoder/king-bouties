import React from "react";
import Heading from "@/components/main/heading";
import ProductCard from "@/components/main/product-card";
import { getProducts } from "@/actions/getProducts";
import { ProductSanitySchemaResult } from "@/types";

const Trending = async () => {
  const products: ProductSanitySchemaResult[] = await getProducts();

  return (
    <section className="px-2 sm:container">
      <div className="">
        <Heading title={"trending"} subTitle={"top view in this week"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 3xl:grid-cols-5 gap-2">
        {products?.map((product, i) => (
          <ProductCard key={product._id} index={i} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
