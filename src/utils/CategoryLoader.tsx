import { useFetchCategoriesQuery } from "@/redux/shopSpotApi";

const CategoryLoader = () => {
  const { isLoading, error } = useFetchCategoriesQuery();
  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories.</div>;
  return null;
};

export default CategoryLoader;
