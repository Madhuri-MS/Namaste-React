import {CLOUDINARY_IMAGE_URL} from "../../utils/constants";

const RestaurantCard = ({resData}) => {
  return(
    <div className="res-card">
      <img className="res-logo" src={CLOUDINARY_IMAGE_URL + resData.cloudinaryImageId} alt="res-logo" />
      <div className="res-card-data">
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
      </div>
    </div>
  )
}
export default RestaurantCard;