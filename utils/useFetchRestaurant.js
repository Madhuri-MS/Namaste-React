import { useEffect, useState } from "react";

import { LIST_API_URL } from "../utils/constants";

const useFetchRestaurant = () => {
    const [resInfo, setResInfo] = useState([]);
const fetchData = async () =>{
     const resData = await fetch(LIST_API_URL)
     const listOfRestaurants = await resData.json()
     setResInfo(listOfRestaurants.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(() => {
    fetchData();
  }, []);

    return resInfo;
}

export default useFetchRestaurant;