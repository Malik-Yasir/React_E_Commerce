import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { items } from "../context/Data";
import Products from "../components/Products";
import styles from "./Product_Detail.module.css";
import DataContext from "../context/DataContext";

const Product_Detail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(DataContext);

  const product = items.find((pro) => pro.id == id);
  const relatedProducts = items.filter(
    (pro) =>
      pro.category.toLowerCase() === product.category.toLowerCase()
  );

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img
              src={product.imgSrc}
              alt={product.title}
              className={styles.img}
            />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>{product.price} Pkr</p>
            <button
              className={styles.btn}
              onClick={() =>
                addToCart(
                  product.id,
                  product.title,
                  product.price,
                  product.imgSrc
                )
              }
            >
              🛒 Add To Cart
            </button>
          </div>
        </div>
      </div>

      <h2 className={styles.heading}>Related Products</h2>
      <Products items={relatedProducts} />
    </div>
  );
};

export default Product_Detail;
