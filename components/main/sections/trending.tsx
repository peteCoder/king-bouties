import React from "react";
import Heading from "@/components/main/heading";
import ProductCard from "@/components/main/product-card";
import { getProducts } from "@/actions/getProducts";
import { CategorySanitySchemaResult, ProductSanitySchemaResult } from "@/types";
import { getCategories } from "@/actions/getCategories";
import { getProductsBasedOnCategory } from "@/actions/getProductsBasedOnCategory";

const Trending = async () => {
  const categories: CategorySanitySchemaResult[] = await getCategories();

  const getProductsOnCategory = async (_id: string) => {
    const products: ProductSanitySchemaResult[] =
      await getProductsBasedOnCategory(_id);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 3xl:grid-cols-5 gap-2">
        {products?.slice(0, 4)?.map((product, i) => (
          <ProductCard key={product._id} index={i} product={product} />
        ))}
      </div>
    );
  };

  console.log("Categories", categories);

  return (
    <section className="px-2 sm:container">
      <div className="">
        <Heading title={"trending"} subTitle={"top view in this week"} />
      </div>
      {categories.slice(0, 3).map((category) => (
        <div key={category._id}>
          <h2 className="text-xl font-bold my-6">{category?.name}</h2>

          {getProductsOnCategory(category?._id)}
        </div>
      ))}
    </section>
  );
};

export default Trending;
