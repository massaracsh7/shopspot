import { ThreeDots } from 'react-loader-spinner';

interface LoaderProps {
  isLoading: boolean;
  height?: string;
  width?: string;
}

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  height = '100%',
  width = '100%',
}) => {
  return (
    <div className="loader">
      <ThreeDots
        height={height}
        width={width}
        color="#fe6b02"
        ariaLabel="ball-triangle-loading"
        visible={isLoading}
      />
    </div>
  );
};

export default Loader;
