import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <span>
        <Link to="/mens" className="noUnderline">
          <p>Mens</p>
        </Link>

        <Link to="/women" className="noUnderline">
          <p>Womens</p>
        </Link>

        <Link to="/kitchen" className="noUnderline">
          <p>Kitchen</p>
        </Link>

        <Link to="/sports" className="noUnderline">
          <p>Sports</p>
        </Link>

        <Link to="/accessories" className="noUnderline">
          <p>Accessories</p>
        </Link>

        <Link to="/electronics" className="noUnderline">
          <p>Electronics</p>
        </Link>

        <Link to="/curtains" className="noUnderline">
          <p>Curtains</p>
        </Link>

        <Link to="/bags" className="noUnderline">
          <p>Bags</p>
        </Link>

        <Link to="/foot" className="noUnderline">
          <p>Foot Ware</p>
        </Link>

        <Link to="/towels" className="noUnderline">
          <p>Towels</p>
        </Link>
      </span>
    </div>
  );
}
