import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Cart);

  const style = {
    fontSize: 30,
    margin: "6vw",
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={style}>My Cart</span>
      <br />
      <span style={style}>Total: ₹ {total}</span>
      <br />
      <span style={style}>Items: {cart.length}</span>

      <div className="productsContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
