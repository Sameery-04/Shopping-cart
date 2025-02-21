import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast"
import { add } from "../redux/Slices/CartSlice";
import { minus } from "../redux/Slices/CartSlice";

const Product = ({post}) => {
  const [selected,setselected]=useState(false);
  // function clickhandler(){
  //   setselected(!selected);
  // }

  const {arr}=useSelector((state)=>state);
  const dispatch =useDispatch();

  const addtocarthandler=()=>{
    dispatch(add(post));
    toast.success("Suceessfully added to cart")
  }
  const removefromcarthandler=()=>{
    dispatch(minus(post.id));
    toast.error("Items removed from cart")
  }
  return (

  <div className="flex flex-col items-center justify-between group
  hover:scale-110 transition-all transform duration-300 ease-in shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_12px] gap-3 p-4 mt-10 ml-5 rounded-md" >
  <div>
   <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title.length>20?(post.title.substr(0,20)+" ..."):(post.title)}</p>
  </div>

  <div>
    <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").splice(0,10).join(" ")+" ..."}</p>
  </div>

  <div className="h-[180px]">
    <img src={post.image} className="h-full w-full"/>
  </div>

  <div className="mt-5 flex justify-between items-center gap-12 w-full">

  <div className="">
    <p className="text-green-600 font-bold">${post.price}</p>
  </div>

  {/* <button onClick={clickhandler}>
    {
      selected?
      (<p>Remove items</p>):(<p>Add to Carts</p>)
    }
  </button> */}

  {
    arr.some((p)=>p.id==post.id)?(
      <button onClick={removefromcarthandler}
      className="rounded-full justify-center transform border-2 border-gray-700 items-center bg-white group-hover:bg-blue-950 group-hover:text-white text-gray-700 font-semibold text-[12px] p-1 px-3 uppercase transition-all duration-300"
      >
        Remove item
      </button>):(
      <button onClick={addtocarthandler}
      className="rounded-full justify-center border-2 border-gray-700 items-center bg-white group-hover:bg-blue-950 group-hover:text-white text-gray-700 font-semibold text-[12px] p-1 px-3 uppercase transition-all duration-300"
      >
        Add to cart
      </button>)
  }
  </div>
  </div>
  )
};

export default Product;
