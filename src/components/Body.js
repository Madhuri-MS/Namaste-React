import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useFetchRestaurant from "../../utils/useFetchRestaurant";

const Body = () => {

   const fetchedData = useFetchRestaurant();
   const [listOfRestaurants, setListOfRestaurants] = useState([...fetchedData]);
   const [filteredRestaurants, setFilteredRestaurants] = useState(fetchedData);
   const [searchText, setSearchText] = useState("");
   const onlineStatus = useOnlineStatus();

   useEffect(() => {
    setListOfRestaurants([...fetchedData]);
    setFilteredRestaurants([...fetchedData]);
  }, [fetchedData]);

  if(onlineStatus === false){
    return <h1>You are offline! Please check your internet connection.</h1>
  }

  return (
    <div className="body">
      <div className="filter-section">
        <button className="filter-btn" onClick={ () => {
          const filterdList  = listOfRestaurants.filter(res => res.info.avgRating > 4);
          setFilteredRestaurants(filterdList);
        }} >Top Rated Restaurants</button>

        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={ (e) => {setSearchText(e.target.value)}}/>
          <button className="search-btn" onClick={() =>{ 
            const searchedRestaurants = listOfRestaurants.filter((res => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
            setFilteredRestaurants(searchedRestaurants);
          }} >Search</button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.length === 0 ? <Shimmer /> :
        filteredRestaurants.map((res) => (
         <Link key={res.info.id} to={"/restaurant/" + res.info.id}><RestaurantCard  resData={res.info} /></Link>
        ))
      }
      </div>
    </div>
  );
};
export default Body;
