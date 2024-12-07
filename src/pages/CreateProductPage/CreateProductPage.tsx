import ProductForm from '@/components/ProductForm';

const CreateProductPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Create your own product</h1>
      <ProductForm />
    </div>
  );
};

export default CreateProductPage;
