import ProductList from '@/components/ProductList';

const ProductPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Our catalog </h1>
      <ProductList />
    </div>
  );
};

export default ProductPage;
