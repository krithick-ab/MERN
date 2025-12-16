import React, { useState } from 'react';

const groceryItems = [
  { name: 'Fresh Apples', description: 'Crisp and juicy, perfect for a healthy snack.', price: '150.00', image: 'https://via.placeholder.com/120?text=Apples' },
  { name: 'Organic Milk', description: 'Farm-fresh organic milk, rich in calcium.', price: '70.00', image: 'https://via.placeholder.com/120?text=Milk' },
  { name: 'Whole Wheat Bread', description: 'Healthy and wholesome, baked fresh daily.', price: '45.00', image: 'https://via.placeholder.com/120?text=Bread' },
  { name: 'Farm Fresh Eggs', description: 'Locally sourced, cage-free eggs.', price: '90.00', image: 'https://via.placeholder.com/120?text=Eggs' },
  { name: 'Avocados', description: 'Creamy and delicious, great for any meal.', price: '80.00', image: 'https://via.placeholder.com/120?text=Avocados' },
  { name: 'Bananas', description: 'Sweet and energy-boosting, ideal for a quick bite.', price: '60.00', image: 'https://via.placeholder.com/120?text=Bananas' },
  { name: 'Spinach', description: 'Fresh green spinach, packed with iron.', price: '30.00', image: 'https://via.placeholder.com/120?text=Spinach' },
  { name: 'Chicken Breast', description: 'Lean and high-protein, perfect for healthy meals.', price: '220.00', image: 'https://via.placeholder.com/120?text=Chicken' },
  { name: 'Basmathi Rice', description: 'Premium long-grain rice, aromatic and fluffy.', price: '120.00', image: 'https://via.placeholder.com/120?text=Rice' },
  { name: 'Lentils (Dal)', description: 'Nutritious and versatile, a staple in Indian cuisine.', price: '55.00', image: 'https://via.placeholder.com/120?text=Lentils' },
  { name: 'Potatoes', description: 'Versatile and hearty, great for various dishes.', price: '40.00', image: 'https://via.placeholder.com/120?text=Potatoes' },
  { name: 'Onions', description: 'Essential for cooking, adds flavor to any dish.', price: '35.00', image: 'https://via.placeholder.com/120?text=Onions' },
  { name: 'Tomatoes', description: 'Juicy and fresh, perfect for salads and curries.', price: '50.00', image: 'https://via.placeholder.com/120?text=Tomatoes' },
  { name: 'Cucumbers', description: 'Refreshing and hydrating, great for salads.', price: '25.00', image: 'https://via.placeholder.com/120?text=Cucumbers' },
  { name: 'Bell Peppers', description: 'Colorful and crunchy, rich in Vitamin C.', price: '75.00', image: 'https://via.placeholder.com/120?text=BellPeppers' },
  { name: 'Yogurt', description: 'Creamy and probiotic-rich, good for digestion.', price: '65.00', image: 'https://via.placeholder.com/120?text=Yogurt' },
  { name: 'Cheese Block', description: 'Rich and flavorful, perfect for grating or slicing.', price: '180.00', image: 'https://via.placeholder.com/120?text=Cheese' },
  { name: 'Butter', description: 'Pure and creamy, essential for baking and cooking.', price: '95.00', image: 'https://via.placeholder.com/120?text=Butter' },
  { name: 'Olive Oil', description: 'Extra virgin olive oil, healthy and flavorful.', price: '300.00', image: 'https://via.placeholder.com/120?text=OliveOil' },
  { name: 'Sugar', description: 'Fine granulated sugar, for all your sweet needs.', price: '50.00', image: 'https://via.placeholder.com/120?text=Sugar' },
  { name: 'Salt', description: 'Pure sea salt, a kitchen essential.', price: '20.00', image: 'https://via.placeholder.com/120?text=Salt' },
  { name: 'Black Pepper', description: 'Freshly ground black pepper, adds a kick to dishes.', price: '40.00', image: 'https://via.placeholder.com/120?text=Pepper' },
  { name: 'Coffee Beans', description: 'Premium roasted coffee beans, for a perfect brew.', price: '250.00', image: 'https://via.placeholder.com/120?text=Coffee' },
  { name: 'Tea Bags', description: 'Assorted tea bags, for a refreshing cup.', price: '80.00', image: 'https://via.placeholder.com/120?text=Tea' },
  { name: 'Orange Juice', description: 'Freshly squeezed orange juice, rich in Vitamin C.', price: '110.00', image: 'https://via.placeholder.com/120?text=OrangeJuice' },
  { name: 'Apple Juice', description: 'Pure apple juice, sweet and natural.', price: '100.00', image: 'https://via.placeholder.com/120?text=AppleJuice' },
  { name: 'Pasta', description: 'Durum wheat pasta, cooks perfectly every time.', price: '70.00', image: 'https://via.placeholder.com/120?text=Pasta' },
  { name: 'Tomato Sauce', description: 'Rich and flavorful tomato sauce, ideal for pasta.', price: '90.00', image: 'https://via.placeholder.com/120?text=TomatoSauce' },
  { name: 'Canned Tuna', description: 'High-quality tuna in brine, great for salads.', price: '120.00', image: 'https://via.placeholder.com/120?text=Tuna' },
  { name: 'Canned Chickpeas', description: 'Ready-to-eat chickpeas, perfect for hummus or curries.', price: '40.00', image: 'https://via.placeholder.com/120?text=Chickpeas' },
  { name: 'Flour', description: 'All-purpose flour, essential for baking.', price: '60.00', image: 'https://via.placeholder.com/120?text=Flour' },
  { name: 'Baking Powder', description: 'Leavening agent for light and fluffy baked goods.', price: '30.00', image: 'https://via.placeholder.com/120?text=BakingPowder' },
  { name: 'Vanilla Extract', description: 'Pure vanilla extract, enhances flavor in desserts.', price: '150.00', image: 'https://via.placeholder.com/120?text=Vanilla' },
  { name: 'Chocolate Bar', description: 'Rich dark chocolate, a delightful treat.', price: '100.00', image: 'https://via.placeholder.com/120?text=Chocolate' },
  { name: 'Ice Cream', description: 'Creamy vanilla ice cream, perfect for desserts.', price: '180.00', image: 'https://via.placeholder.com/120?text=IceCream' },
  { name: 'Frozen Peas', description: 'Quick-frozen green peas, retains freshness.', price: '50.00', image: 'https://via.placeholder.com/120?text=FrozenPeas' },
  { name: 'Frozen Corn', description: 'Sweet corn kernels, great for stir-fries.', price: '55.00', image: 'https://via.placeholder.com/120?text=FrozenCorn' },
  { name: 'Dish Soap', description: 'Powerful dish soap, cuts through grease easily.', price: '70.00', image: 'https://via.placeholder.com/120?text=DishSoap' },
  { name: 'Laundry Detergent', description: 'High-efficiency laundry detergent, for clean clothes.', price: '250.00', image: 'https://via.placeholder.com/120?text=Detergent' },
  { name: 'Toilet Paper', description: 'Soft and strong toilet paper, family pack.', price: '120.00', image: 'https://via.placeholder.com/120?text=ToiletPaper' },
  { name: 'Paper Towels', description: 'Absorbent paper towels, for quick cleanups.', price: '80.00', image: 'https://via.placeholder.com/120?text=PaperTowels' },
  { name: 'Toothpaste', description: 'Fluoride toothpaste, for strong and healthy teeth.', price: '60.00', image: 'https://via.placeholder.com/120?text=Toothpaste' },
  { name: 'Shampoo', description: 'Nourishing shampoo, for shiny and healthy hair.', price: '150.00', image: 'https://via.placeholder.com/120?text=Shampoo' },
  { name: 'Body Wash', description: 'Refreshing body wash, leaves skin soft and smooth.', price: '130.00', image: 'https://via.placeholder.com/120?text=BodyWash' },
  { name: 'Hand Soap', description: 'Gentle hand soap, keeps hands clean and moisturized.', price: '50.00', image: 'https://via.placeholder.com/120?text=HandSoap' },
  { name: 'Trash Bags', description: 'Strong and durable trash bags, large capacity.', price: '90.00', image: 'https://via.placeholder.com/120?text=TrashBags' },
  { name: 'Batteries', description: 'AA alkaline batteries, long-lasting power.', price: '100.00', image: 'https://via.placeholder.com/120?text=Batteries' },
  { name: 'Light Bulbs', description: 'Energy-efficient LED light bulbs, warm white.', price: '70.00', image: 'https://via.placeholder.com/120?text=LightBulbs' },
  { name: 'Cleaning Wipes', description: 'Disinfecting cleaning wipes, for a spotless home.', price: '110.00', image: 'https://via.placeholder.com/120?text=CleaningWipes' },
  { name: 'Air Freshener', description: 'Long-lasting air freshener, fresh linen scent.', price: '85.00', image: 'https://via.placeholder.com/120?text=AirFreshener' },
];

const productsData = Array.from({ length: 50 }, (_, i) => {
  const item = groceryItems[i % groceryItems.length];
  return {
    id: i + 1,
    name: item.name,
    description: item.description,
    price: (parseFloat(item.price) + (Math.random() * 20 - 10)).toFixed(2), // Slightly vary prices
    image: item.image,
  };
});

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const newFilteredProducts = productsData.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <main>
      <div className="container">
        <h2>Our Products</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-item-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;