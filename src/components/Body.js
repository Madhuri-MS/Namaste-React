import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { LIST_API_URL } from "../../utils/constants";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
   const [searchText, setSearchText] = useState("");

  const fetchData = async () =>{
     const resData = await fetch(LIST_API_URL)
     const listOfRestaurants = await resData.json()
     setListOfRestaurants(listOfRestaurants.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(listOfRestaurants.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(() => {
    fetchData();
  }, []);

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
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))
      }
      </div>
    </div>
  );
};
export default Body;
