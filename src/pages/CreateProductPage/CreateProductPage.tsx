import ProductForm from "@/components/ProductForm";

const CreateProductPage: React.FC = () => {
  return (
    <div className="container">
      <h1>CreateProductPage</h1>
      <p>Create your own product and add it to the catalog</p>
      <ProductForm />
    </div>
  );
};

export default CreateProductPage;
