import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {arr}=useSelector((state)=>state)
  return <div>
  <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
  <NavLink to='/'>
  <div className="ml-5">
  <img src="./logo.png" width='200px' height='200px'
  />
  </div>
  </NavLink>
    
    <div className="flex gap-x-8 items-center font-medium text-slate-100 mr-5">
    <NavLink to='/'>
    <div >
    <p className="text-xl">Home</p>
    </div>
    </NavLink>

    <NavLink to='/cart'>
      <div className="flex relative">
      <FaShoppingCart className="text-xl"/>
      {
        arr.length>0&&<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white">{arr.length}</span>
      }
      
      </div>
    </NavLink>
    </div>
  </nav>
  </div>;
};

export default Navbar;
