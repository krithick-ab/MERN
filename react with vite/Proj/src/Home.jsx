import React from 'react';

function Home() {
  return (
    <main>
      <div className="container">
        <h2>Welcome to Groc!</h2>
        <p>Your one-stop shop for fresh groceries delivered right to your doorstep. We offer a wide range of high-quality products at unbeatable prices.</p>
        <p>Experience the convenience of online grocery shopping with Groc. Freshness and quality guaranteed!</p>
      </div>

      <div className="container">
        <h2>Trending Products</h2>
        <div className="product-grid">
          <div className="product-item">
            <img src="https://via.placeholder.com/120" alt="Fresh Apples" />
            <div className="product-item-details">
              <h3>Fresh Apples</h3>
              <p>Crisp and juicy, perfect for a healthy snack.</p>
              <p className="price">₹2.99/lb</p>
            </div>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/120" alt="Organic Milk" />
            <div className="product-item-details">
              <h3>Organic Milk</h3>
              <p>Farm-fresh organic milk, rich in calcium.</p>
              <p className="price">₹4.50/gallon</p>
            </div>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/120" alt="Whole Wheat Bread" />
            <div className="product-item-details">
              <h3>Whole Wheat Bread</h3>
              <p>Healthy and wholesome, baked fresh daily.</p>
              <p className="price">₹3.25</p>
            </div>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/120" alt="Farm Fresh Eggs" />
            <div className="product-item-details">
              <h3>Farm Fresh Eggs</h3>
              <p>Locally sourced, cage-free eggs.</p>
              <p className="price">₹3.00/dozen</p>
            </div>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/120" alt="Avocados" />
            <div className="product-item-details">
              <h3>Avocados</h3>
              <p>Creamy and delicious, great for any meal.</p>
              <p className="price">₹1.75 each</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;