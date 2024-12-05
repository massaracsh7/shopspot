import { useFetchProductByIdQuery } from "@/redux/shopSpotApi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "@/redux/store";

const DetailInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (id === undefined) {
    return <div>Invalid product ID</div>;
  }
  const { isLoading, error } = useFetchProductByIdQuery(Number(id));
  const product = useSelector(
    (state: RootState) => state.products.products.find(item => item.id === Number(id)));
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {error && <p>Error loading  data</p>}
      {isLoading && <p>Loading ...</p>}
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <button>❤</button>
      <button>🗑</button>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default DetailInfo;


