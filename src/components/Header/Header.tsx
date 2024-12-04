import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header>
      <div className="container" >
        <h1> Header </h1>
        < nav >
          <ul>
            <li>
              <Link to={`/`} aria-label="Main Page">
                Main Page
              </Link>
            </li>
            <li>
              <Link to={`/products`} aria-label="Catalog Page">
                Catalog
              </Link>
            </li>
            <li>
              <Link to={`/create-product`} aria-label="Create Product Page">
                Create product
              </Link>
            </li>
          </ul>
        </nav>
      </div >
    </header >
  );
};

export default Header;