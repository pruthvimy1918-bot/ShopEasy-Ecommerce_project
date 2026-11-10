import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");

        
        const formatted = response.data.map((product) => ({
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
        }));

        setProducts(formatted);
      } catch (err) {
        setError("Could not load products. Is the backend server running?");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Our Products</h1>

      {loading && <p>Loading products...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
