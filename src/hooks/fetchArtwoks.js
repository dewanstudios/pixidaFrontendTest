 import axios from "axios";
import React, { useEffect, useState } from "react";
 
 const fetchArtwoks = (param) => {
    const [response,setResponse] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState("");

    axios.defaults.baseURL = "https://www.rijksmuseum.nl";

    const getData = async (url) =>{

        try {
            setIsLoading(true);
            const res = await axios(url)
            setResponse(res.data.artObjects)

        } catch (error) {
            setError("Error fetching Images Try Searching")
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getData(param);
    },[param])

   return {
    response,
    isLoading,
    error,
    getData: url => getData(url)
   };
 };
 
 export default fetchArtwoks;
 