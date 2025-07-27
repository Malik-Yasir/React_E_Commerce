// ShopByCategory.jsx
import React, { useContext, useState } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaThLarge,
} from "react-icons/fa";
import DataContext from "../context/DataContext";
import { items } from "../context/Data";
import styles from "./ShopByCategory.module.css";

const categories = [
  { Name: "All", icons: <FaThLarge /> },
  { Name: "Mobiles", icons: <FaMobileAlt /> },
  { Name: "Laptops", icons: <FaLaptop /> },
  { Name: "Tablets", icons: <FaTabletAlt /> },
  { Name: "Watches", icons: <FaClock /> },
];

const priceRange = [30000, 40000, 50000, 60000, 70000, 80000];

const ShopByCategory = () => {
  const { setProducts } = useContext(DataContext);
  const [selectedPrice, setSelectedPrice] = useState(80000);

  const filterByCategory = (cat) => {
    if (cat === "All") {
      setProducts(items);
      return;
    }
    setProducts(
      items.filter(
        (pro) =>
          pro.category.toLocaleLowerCase() === cat.toLocaleLowerCase()
      )
    );
  };

  const filterByPrice = (price) => {
    setSelectedPrice(price);
    setProducts(items.filter((pro) => pro.price <= price));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Filter Products</h3>

      {/* Category Icons */}
      <div className={styles.iconGroup}>
        {categories.map(({ Name, icons }) => (
          <div
            key={Name}
            className={styles.iconItem}
            onClick={() => filterByCategory(Name)}
          >
            {icons} <span>{Name}</span>
          </div>
        ))}
      </div>

      {/* Price Filter Buttons */}
      <div className={styles.priceGroup}>
        {priceRange.map((value) => (
          <span
            key={value}
            onClick={() => filterByPrice(value)}
            className={`${styles.priceBtn} ${
              selectedPrice === value ? styles.selectedPrice : ""
            }`}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
