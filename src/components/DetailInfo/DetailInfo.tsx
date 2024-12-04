import { useFetchProductByIdQuery } from "@/redux/shopSpotApi";
import { Link, useParams } from "react-router-dom";

const DetailInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (id === undefined) {
    return <div>Invalid product ID</div>;
  }
  const { data: product, isLoading, error } = useFetchProductByIdQuery(Number(id));
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


