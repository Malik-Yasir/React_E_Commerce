import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = () => {
  const { cart, setCart, addToCart } = useContext(DataContext);

  return (
    <div className={styles.wrapper}>
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <h1>Your Cart Is Empty</h1>
          <br></br>
          <Link to={"/"} className={styles.continueBtn}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cardGrid}>
            {cart.map((product) => (
              <div key={product.id} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={product.imgSrc}
                        className={styles.cartImg}
                        alt={product.title}
                      />
                    </div>
                    <div className={styles.contentWrapper}>
                      <div className={styles.cardBody}>
                        <h3 className={styles.productTitle}>
                          {product.title}
                        </h3>
                        <p className={styles.productDescription}>
                          {product.description}
                        </p>
                        <p className={styles.productPrice}>
                          {product.price} PKR
                        </p>
                        <button
                          className={styles.buyNowBtn}
                          onClick={() =>
                            addToCart(
                              product.id,
                              product.title,
                              product.price,
                              product.imgSrc
                            )
                          }
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.checkoutBtn}>Check Out</button>
            <button onClick={() => setCart([])} className={styles.clearBtn}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;


