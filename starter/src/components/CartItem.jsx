import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add } from "../redux/Slices/CartSlice";
import { minus } from "../redux/Slices/CartSlice";

const CartItem = ({value,itemindex}) => {
  const dispatch=useDispatch();

  function removefromcarthandler(){
    dispatch(minus(value.id));
    toast.error("Removed Successfully");
  }
  return (
  <div className="flex items-center justify-between p-5 mx-5">
    <div className="flex p-3 gap-5 items-center">
      <div className="w-[30%]">
      <img src={value.image} className="object-cover"/>
      </div>

    <div className="ml-10 w-[70%] space-y-5 ">
      <h1 className="font-semibold text-lg">{value.title}</h1>
      <h1 className="text-slate-700 ">{value.description.split(" ").splice(0,20).join(" ")+" ..."}</h1>

    <div className="flex w-full justify-between items-center">
   <p className="text-green-600 font-bold"> ${value.price} </p>
   <div onClick={removefromcarthandler}
   className="w-9 h-9 bg-red-300 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600 group transition-all duration-500"
   >
   {/* there is one issue */}
   <MdDeleteOutline className="group-hover:text-white transition-all duration-500"/>
   </div>

    </div>
    </div>
    </div>
  </div>
  )
};

export default CartItem;
