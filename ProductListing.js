import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Low Maintenance", img: "/snake.jpg" },
  { id: 2, name: "Fiddle Leaf Fig", price: 25, category: "Large Plants", img: "/fig.jpg" },
  { id: 3, name: "Aloe Vera", price: 10, category: "Succulents", img: "/aloe.jpg" },
];

const ProductListing = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h2 className="text-3xl mb-4">Shop Our Houseplants</h2>
      <div className="grid grid-cols-3 gap-4">
        {plants.map((plant) => (
          <div key={plant.id} className="border p-4 rounded shadow">
            <img src={plant.img} alt={plant.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-xl">{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              className="bg-green-500 text-white px-4 py-2 mt-2"
              onClick={() => addToCart(plant)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
