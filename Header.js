import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center bg-green-600 p-4 text-white">
      <h1 className="text-2xl font-bold">Houseplant Store</h1>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/products" className="mx-2">Shop</Link>
        <Link to="/cart" className="mx-2 flex items-center">
          <ShoppingCart size={24} />
          <span className="ml-1">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
