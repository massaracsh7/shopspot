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
              <Link to={`/products`} aria-label="Main Page">
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div >
    </header >
  );
};

export default Header;