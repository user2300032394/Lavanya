import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl mb-4">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-2">
            <img src={item.img} alt={item.name} className="w-16 h-16 object-cover" />
            <h3 className="text-xl">{item.name}</h3>
            <p>${item.price}</p>
            <div className="flex items-center">
              <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-300">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-300">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </div>
        ))
      )}
      <p className="text-xl mt-4">Total: ${totalCost}</p>
      <button className="bg-gray-500 text-white px-4 py-2 mt-2">Checkout (Coming Soon)</button>
      <Link to="/products" className="block mt-2 text-blue-500">Continue Shopping</Link>
    </div>
  );
};

export default CartPage;
