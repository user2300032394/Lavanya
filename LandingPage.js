import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="text-4xl font-bold mb-4">Welcome to Houseplant Store</h1>
      <p className="text-lg mb-6 text-center w-3/4">
        We offer a variety of beautiful houseplants to brighten your space.
      </p>
      <Link to="/products" className="bg-green-500 px-6 py-3 rounded text-lg">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
