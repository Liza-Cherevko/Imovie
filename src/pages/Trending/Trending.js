import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Trending() {
  const [trends, setTrends] = useState([]);

  const fetchTrends = async () => { 
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=1160cac5ff26e1cc795d5733856ce01c`);
    setTrends(data?.results)
  }
  useEffect(() => {
    fetchTrends()
  }, []);
console.log(trends);
  
  return (
    <div>Trending</div>
  )
}

export default Trending