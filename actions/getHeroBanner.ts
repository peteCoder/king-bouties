import { sanityClient } from "@/lib/client";

export const getHeroBanners = async () => {
  const query = `*[_type == 'hero_banner']{
      _id,
      _createdAt,
      _updatedAt,
        title,
        subTitle,
        textColor,
        bannerImage{
            asset->{
                url
            }
        }
    }`;

  const result = await sanityClient.fetch(query);

  return result;
};
