import React, { useContext, useState } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaThLarge,
  FaRubleSign,
} from "react-icons/fa";
import DataContext from "../context/DataContext";
import { items } from "../context/Data";

const categories = [
  { Name: "All Products", icons: <FaThLarge /> },
  { Name: "Mobiles", icons: <FaMobileAlt /> },
  { Name: "Laptops", icons: <FaLaptop /> },
  { Name: "Tablets", icons: <FaTabletAlt /> },
  { Name: "Watches", icons: <FaClock /> },
];

const priceRange = [30000, 40000, 50000, 60000, 70000, 80000];

const ShopByCategory = () => {
  const { setProducts } = useContext(DataContext);

  const [selectedPrice, setSelectedPrice] = useState(80000);

  const filterByCategory = (cat)=>{
    if(cat=='All Products'){
      setProducts(items);
      return
    }
    setProducts(items.filter(pro=>pro.category.toLocaleLowerCase()===cat.toLocaleLowerCase()))
  }

  const filterByPrice = (price)=>{
    setProducts(items.filter(pro=>pro.price <= price))
  }
  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded FilterContainer">
        <h3 className="text-center mb-3">Filter Products</h3>
        <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
          {categories.map(({ Name, icons }) => (
            <div
              key={Name}
              style={{ cursor: "pointer" }}
              className="FilterIcons"
              onClick={()=>filterByCategory(Name)}
            >
              {icons} <span>{Name}</span>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 ">
          {priceRange.map((value) => (
            <span
              key={value}
               onClick={()=>filterByPrice(value)}
              className={`Filter-Btn ${
                selectedPrice === value
                  ? "bg-warning text-dark"
                  : "bg-light text-dark"
              }`}
            >
              {value}PKR
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
