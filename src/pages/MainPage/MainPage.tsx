import CardsList from "@/components/CardList/CardList";
import { useFetchProductsQuery } from "@/redux/shopSpotApi";

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <h1>MainPage</h1>
      <CardsList/>
    </div>
  );
};

export default MainPage;
