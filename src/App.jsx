import React from "react";
import { useEffect } from "react";
import Products from "./components/Products";
import axios from "axios";
import { useState } from "react";

const App = () => {
   const [todos,setTodos] = useState([])
const [page,setPage] = useState(1)
const [limit,setLimit] = useState(3)
const [totalCount,settotalCount] = useState(0)
  
     useEffect(()=>{
    const getTodo = async () =>{

      var r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      console.log(r.data)
      setTodos(r.data)
      settotalCount(Number(r.headers["x-total-count"]))
      
    }
    getTodo()
   
  },[page,limit])
  return <div > <Products todos={todos}   setPage={setPage} setLimit={setLimit} page={page} limit={limit} totalCount={totalCount}/>
 
  
  </div>;
};

export default App;
