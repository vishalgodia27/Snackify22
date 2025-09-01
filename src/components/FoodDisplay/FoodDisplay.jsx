// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import Fooditem from '../../Fooditem/Fooditem'
// const FoodDisplay = ({ category }) => {
//     const { food_list } = useContext(StoreContext)
//     return (

//         <div>
//                 <h2> Savor the Finest Nearby  </h2>
//             <div className='food-display-list' id='food-display-list' >
//                 {
//                     food_list.map((item,index)=>{
//                         return <Fooditem key={index} id={item._id} name={item.name}  description={item.description} price={item.price} image={item.image} />
//                     })
//                 }

//             </div>
//         </div>
//     )
// }

// export default FoodDisplay
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../../Fooditem/Fooditem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Savor the Finest Nearby</h2>

      <div className="food-display-list" id="food-display-list">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((item) => (
            <Fooditem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
