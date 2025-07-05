import { useEffect, useState } from "react";


const useFetchData = () => {
  const [estates, setEstates]=useState([]);
  const [loader, setLoader]=useState(true);

  useEffect(()=>{
    const fetchData=async()=>{
      setLoader(true)
      const res= await fetch('./data.json');
      const data= await res.json();
      setEstates(data);
      setLoader(false)
    }
    fetchData()
  },[])
  return {estates, loader};
};

export default useFetchData;