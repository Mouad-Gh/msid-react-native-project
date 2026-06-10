import { useState, useEffect } from 'react'


export default function useFetch(api) {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  console.log("kpi", api)
  const fetchData = async()=> {
    try{
      const response = await fetch(api);
      const result = await response.json();
      setData(result);
      console.log("aaaaaaaaaaa", result)
    }catch(err){
      setError(err.message());
      console.log("err")
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
  }, [api])

  return { data, loading, error }
}