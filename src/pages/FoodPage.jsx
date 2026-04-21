import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import FoodCard from "../components/FoodCard";
import ProductCard from "../components/ProductCard";
import Img1 from "../assets/food1.jpg";
import Img2 from "../assets/food2.jpg";
import Img3 from "../assets/food3.jpg";
import Img4 from "../assets/food4.jpg";
import Img5 from "../assets/food5.jpg";
import Img6 from "../assets/food6.jpg";
import Img7 from "../assets/food7.jpg";

const FoodPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const recipes = [
    {
      id: 1,
      name: "Delicious Pasta",
      description: "Homemade pasta with fresh veggies and sausage",
      time: "30 mins",
      servings: 4,
      image: Img1,
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description:
        "Perfectly grilled salmon with lemon butter sauce and roasted vegetables",
      time: "25 mins",
      servings: 2,
      image: Img2,
    },
    {
      id: 3,
      name: "Chocolate Cake",
      description:
        "Rich and moist chocolate cake with creamy topping",
      time: "45 mins",
      servings: 8,
      image: Img3,
    },
  ];

  const galleryImages = [Img4, Img5, Img6, Img7];

  const getProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError("Unable to load products. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-content">
            <h1>
              A <span className="highlight">recipe</span> of happiness :)
            </h1>
            <h2>Cook like a chef</h2>
            <p>
              Start a delicious journey, where tasty discoveries and flavorful
              creations await your every craving
            </p>

            <div className="button-group">
              <button className="btn btn-primary">Explore recipes</button>
              <button className="btn btn-outline">Watch videos</button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-gallery">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-item">
                <img src={img} alt={`Recipe ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECIPES */}
      <section className="recipes-section">
        <div className="recipes-container">
          <h2 className="section-title">Our Featured Recipes</h2>

          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <FoodCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <h2>Our Products</h2>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            margin: "20px 0",
            width: "100%",
            maxWidth: "400px",
          }}
        />

        {/* ERROR */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {loading ? (
            <p>Loading products...</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default FoodPage;