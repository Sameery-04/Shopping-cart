import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";


const Cart = () => {
  // syntax important
  const {arr} = useSelector((state) => state);
  console.log(arr);
  const [totalAmount, setTotalAmount] = useState(0);

useEffect(() => {
    setTotalAmount(arr.reduce((total, curr) => total + (curr.price), 0));
}, [arr]);

  return(
    <div className="mt-5 max-w-[1160px] mx-auto flex gap-x-14">
      {
        arr.length>0?
        (
          <div className="flex max-w-[1200px]">
          <div className="max-w-[60%] flex flex-col p-2">
          {
            arr.map( (value,index)=>(
              <div className="">
              <CartItem key={index} value={value} itemindex={index}/>
              {
                index>=0 && index<arr.length-1 && 
                <div className="h-[1px] w-[95%] bg-black ">
                </div>
              }
              </div>
            ))
          }
          </div>

          <div className="flex flex-col w-[100%] mt-12">
          <div>
            <div className="text-xl uppercase text-green-600 font-bold">Your cart</div>
            <div className="text-5xl uppercase text-green-600 font-bold">Summary</div>
            <p className="mt-5 font-semibold text-xl">
              <span>Total items: <span className="font-medium">{arr.length}</span></span>
            </p>
            </div>

            <div className="mt-16 w-full flex flex-col gap-y-8">
              <p className="font-semibold text-2xl">TotalAmount : <span className="font-medium">${totalAmount}</span></p>
              <button
              className="bg-green-600 py-3 text-lg text-white border-2 border-white rounded-md hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-500"
              >Checkout Now</button>
            </div>
          </div>

          </div>
        ):
        (<div className="w-full h-[750px] flex flex-col justify-center items-center gap-12">
        <div className="font-bold opacity-70">
          <h1 className="text-xl">Your cart is Empty!</h1>
        </div>

        <div className="">
        <Link to='/'>
          <button className="text-md font-bold uppercase bg-green-600 px-7 py-3 rounded-md border-2 border-white text-white hover:bg-white hover:text-green-600 hover:border-green-600 hover:border-2 transition-all duration-500">
            Shop Now
          </button>
          </Link>
        </div>
        </div>)
      }
    </div>
  )
};

export default Cart;
