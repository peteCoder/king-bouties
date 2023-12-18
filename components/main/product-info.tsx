import { formatCurrency } from "@/lib/utils";
import { ProductSanitySchemaResult } from "@/types";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { IoStar } from "react-icons/io5";
import { Button } from "../ui/button";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ProductInfo = ({ data }: { data: ProductSanitySchemaResult }) => {
  // console.log()
  return (
    <div className="space-y-4">
      <div className="">Available: {data.qty_available}</div>
      <div className="font-bold text-2xl space-y-2">
        <div className="">{data?.name}</div>
        <div className="text-primary text-2xl">
          {formatCurrency(data?.price)}
        </div>
        {data?.ratings > 0 && (
          <div className="flex items-center gap-2 my-5">
            {Array.from({ length: data.ratings }).map((_, i) => (
              <IoStar color={"#FFD700"} key={i} size={14} />
            ))}
          </div>
        )}
      </div>

      <div className="text-sm">{data?.description}</div>

      {data?.sizes?.length > 0 && (
        <div className="">
          {data?.sizes.map((size) => (
            <div key={size._id} className=""></div>
          ))}
        </div>
      )}

      <div className="flex sm:items-center gap-2 flex-col sm:flex-row my-8">
        <div className="flex items-center bg-gray-400/20 max-w-[170px] justify-between w-full">
          <button className="h-full p-4">
            <Minus size={10} />
          </button>
          <div className="h-full p-4">2</div>
          <button className="h-full p-4">
            <Plus size={10} />
          </button>
        </div>

        <Button className="uppercase flex gap-1 items-center w-full min-h-[56px]">
          <HiOutlineShoppingBag size={18} />
          <span>Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
