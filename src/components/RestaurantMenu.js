import { useParams } from "react-router";
import  {MENU_API_URL} from "../../utils/constants";
import { useEffect } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    

const fetchMenuData = async () =>{
   // const resMenu = await fetch(MENU_API_URL);
    //const menuData = await resMenu.json();
    //console.log(menuData);
}

    useEffect(() =>{
        fetchMenuData();
    },[]);

    return (
        <div>
            <h1>Restaurant Menu Name - {resId}</h1>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;