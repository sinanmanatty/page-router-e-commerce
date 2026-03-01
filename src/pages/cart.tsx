import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-16 text-center">
        <h1 className="text-4xl text-black font-bold mb-4">Your Cart 🛒</h1>
        <p className="text-gray-500 mb-6">Your cart is empty.</p>

        <Link href="/products">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold text-black mb-6">Shopping Cart 🛒</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-6 rounded-xl shadow-sm bg-white"
          >
            <div className="flex items-center gap-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              <div>
                <h2 className="text-lg font-semibold text-black">{item.title}</h2>

                <p className="text-black mt-1">
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-800 rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold text-gray-800">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-800 rounded"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold mt-3 text-blue-400">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md h-fit">
        <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>

        <div className="flex justify-between text-gray-500 mb-3">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between text-gray-500 mb-3">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-500 mb-6">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-xl font-bold text-blue-600">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>

        <button
          onClick={clearCart}
          className="w-full mt-3 bg-red-500 py-3 rounded-lg hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}