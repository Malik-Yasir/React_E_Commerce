import React, { useContext, useState } from "react";
import { FaAmazon, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import styles from "/src/components/Navbar/Navbar.module.css";

const Navbar = () => {
  const { cart } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link to="/" className={styles.brand}>
          <FaAmazon className={styles.logoIcon} />
          <span className={styles.navTitle}>Amazon</span>
        </Link>

        {/* Search Bar */}
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </form>

        {/* Categories */}
        <ul className={styles.navList}>
          {["Mobiles", "Laptops", "Tablets", "Watches"].map((category) => (
            <li key={category} className={styles.navItem}>
              <Link
                to={`/product/category/${category}`}
                className={styles.navLink}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Button */}
        <Link to="/card" className={styles.cartButton}>
          <FaShoppingCart className={styles.cartIcon} />
          {cart.length > 0 && (
            <span className={styles.badge}>{cart.length}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
