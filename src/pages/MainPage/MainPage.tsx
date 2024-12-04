import { useFetchProductsQuery } from "@/redux/shopSpotApi";

const MainPage: React.FC = () => {
  const { data: products = [], isLoading, error } = useFetchProductsQuery();
  console.log(isLoading, error, products);
  return (
    <div className="container">
      <h1>MainPage</h1>
    </div>
  );
};

export default MainPage;
