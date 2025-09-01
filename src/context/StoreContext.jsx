// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
// export const StoreContext = createContext(null)
// const StoreContextProvider=(props)=>{
//     const [carItems,setCartItems]=useState({});
//     const addTocart=(itemId)=>{
//         if(!carItems[itemId])
//         {
//             setCartItems((prev)=>({...prev,[itemId]:1}))
//         }
//         else{
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         }
//     }
//     const removeFromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
//     useEffect(()=>{
//         console.log(carItems);

//     },[carItems])
//     const contextValue={

//         food_list,
//         carItems,
//         setCartItems,
//         addTocart,
//         removeFromCart
//     }
//     return(
//         <StoreContext.Provider value={contextValue}>
//             {props.children}

//         </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0, // avoid negative values
    }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let iteminfo = food_list.find((product) => product._id === items)
        totalAmount += iteminfo.price * cartItems[items]

      }
    

    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
