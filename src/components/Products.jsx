import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ShopByCategory from "./ShopByCategory";
import DataContext from "../context/DataContext";
import { ToastContainer } from "react-toastify";
import styles from "./Products.module.css";

const Products = ({ items }) => {
  const { pathname } = useLocation();
  const { addToCart } = useContext(DataContext);

  return (
    <>
      <ToastContainer />
      {pathname === "/" && <ShopByCategory />}
      <div className={styles.proContainer}>
        {items.map((product) => (
          <div key={product.id} className={styles.cardWrapper}>
            <div className={styles.card}>
              <Link to={`/product/${product.id}`} className={styles.imageContainer}>
                <img src={product.imgSrc} alt={product.title} className={styles.productImage} />
              </Link>
              <div className={styles.cardBody}>
                <h5 className={styles.productTitle}>{product.title}</h5>
                <p className={styles.productPrice}>{product.price}PKR</p>
                <button
                  className={styles.addToCartBtn}
                  onClick={() =>
                    addToCart(
                      product.id,
                      product.title,
                      product.price,
                      product.imgSrc
                    )
                  }
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
