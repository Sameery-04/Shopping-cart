import { useEffect, useState } from "react";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setloading]=useState(false);
  const [posts,setposts]=useState([]);

  async function fetchData() {
    setloading(true);
    try{
    const content=await fetch(API_URL);
    const data=await content.json();

    setposts(data);
  }
    catch(error){
      throw new error ("This is error");
    }
    setloading(false);
  }

  useEffect( ()=>{
    fetchData();
  },[])
  return( <div className="w-screen">
  {
    loading?(
      <div className=" w-full h-[600px] flex justify-center items-center text-3xl">

        <p className="font-medium">Loading!</p>
      </div>
    ):posts.length>0?(
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 ">{
        posts.map( (post)=>(
          <Product key={post.id} post={post}/>
        ))}
      </div>
    ):(
      <div className="flex justify-center items-center">
        <p>No Carts Found</p>
      </div>
    )
  }
  </div>)
};

export default Home;
