import { sanityClient } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Here we get our URL (req.url) in a readable browser url format like
    // `/api/product?search=foo&country=bar&product_name=foo&orderOfItems=price%20asc`
    const searchURL = new URL(req.url);

    const { searchParams } = searchURL;

    // These are the search query parameters gotten from the URL
    // The searchParams.get() method will return an empty string if
    // the user sends nothing.

    const searchTerm = searchParams.get("search");
    const color = searchParams.get("color");
    const categoryName = searchParams.get("categoryName");
    const orderOfItems = searchParams.get("orderOfItems");
    const priceRange = searchParams.get("priceRange");

    const query = `*[_type == 'product']{
    _id,
    _updatedAt,
    _createdAt,
    name,
    price,
    is_featured,
    is_archived,
    qty_available,
    description,
    ratings,
    sizes[]->{
        _id,
        name,
        code
    },
    category->{
        _id,
        name,
        description,
        bannerImage{
            asset->{
                url
            }
        }
    },
    gallery[]->{
        _id,
        _updatedAt,
        _createdAt,
        imageUrl {
            asset->{url}
        },
        description
    }
  }`;
    const products = await sanityClient.fetch(query);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
