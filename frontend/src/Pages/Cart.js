import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Component/CartProduct";
import emptyCart from "../imgs/Cartempty.gif";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-3xl font-bold text-rose-600">
          Your Cart
        </h2>
        

        {productCartItem[0] ?
          <div className="my-4 flex gap-4">
            {/* {display cart items} */}
            <div className="w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    price={el.price}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            {/* {total cart items} */}
            <div className="w-full max-w-md bg-yellow-100 ml-auto">
              <h2 className="bg-yellow-200 text-center text-black font-semibold p-1 text-lg">
                Summary
              </h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty:</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price:</p>
                <p className="ml-auto w-32 font-bold">
                  {" "}
                  <span className="text-red-700">₹</span>
                  {totalPrice}
                </p>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold rounded-full py-2 text-white hover:bg-red-600 cursor-pointer mt-2 m-auto max-w-[120px] flex justify-center">
                Payment
              </button>
            </div>
          </div>
          :
          <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCart} className="w-full max-w-sm my-20" alt=""/>
            <p className="text-black font-bold text-3xl">Empty Cart</p>
          </div>
          </>
        }
      </div>
    </>
  );
};

export default Cart;
