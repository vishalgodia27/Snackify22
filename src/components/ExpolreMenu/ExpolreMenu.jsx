// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// function ExploreMenu({category,setCategory}) {
//     return (
//         <div className='explore-menu' id='explore-menu'>
//             <h1>Explore our menu</h1>
//             <p className='explore-menu-text'>
//                 Indulge in a hand-picked menu crafted to delight every craving. 
//                 At Snackify, every dish is more than food — it’s an experience 
//                 designed to comfort, excite, and stay with you long after the last bite.
//             </p>
//             <div className='explore-menu-list'>
//                 {menu_list.map((item, index) => (
//                     <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-item'>
//                         <img  className={category===item.menu_name?"active"} src={item.menu_image} alt={item.menu_name} />
//                         <p>{item.menu_name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// // export default ExploreMenu
// import React from "react";
// import "./ExploreMenu.css";
// import { menu_list } from "../../assets/assets";

// function ExploreMenu({ category, setCategory }) {
//   return (
//     <div className="explore-menu" id="explore-menu">
//       <h1>Explore our menu</h1>
//       <p className="explore-menu-text">
//         Indulge in a hand-picked menu crafted to delight every craving. 
//         At <b>Snackify</b>, every dish is more than food — it’s an experience 
//         designed to comfort, excite, and stay with you long after the last bite.
//       </p>

//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => (
//           <div
//             key={index}
//             className={`explore-menu-item ${category === item.menu_name ? "active" : ""}`}
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? "All" : item.menu_name
//               )
//             }
//           >
//             <img
//               className={category === item.menu_name ? "active" : ""}
//               src={item.menu_image}
//               alt={item.menu_name}
//             />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ExploreMenu;
// import React from "react";
// import "./ExploreMenu.css";
// import { menu_list } from "../../assets/assets";

// function ExploreMenu({ category, setCategory }) {
//   return (
//     <div className="explore-menu" id="explore-menu">
//       <h1>Explore our menu</h1>
//       <p className="explore-menu-text">
//         Indulge in a hand-picked menu crafted to delight every craving. 
//         At <b>Snackify</b>, every dish is more than food — it’s an experience 
//         designed to comfort, excite, and stay with you long after the last bite.
//       </p>

//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => (
//           <div
//             key={index}
//             className={`explore-menu-item ${category === item.menu_name ? "active" : ""}`}
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? "All" : item.menu_name
//               )
//             }
//           >
//             <img
//               src={item.menu_image}

//             />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ExploreMenu;

// import React from "react";
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'
// const ExploreMenu = ({ category, setCategory })
// return (
//   <div className="explore-menu" id='explore-menu' >
//     <h1> Explore our menu </h1>
//     <p className='explore-menu-text' >
//       Indulge in a hand-picked menu crafted to delight every craving. At <b>Snackify</b>, every dish is more than food — it’s an experience designed to comfort, excite, and stay with you long after the last bite.
//     </p>
//     <div className="explore-menu-list" >
//       <div onClick={()=>setCategory(prev=>prev===item.menu_name)?"All":item.menu_name} key={index} className='explore-menu-list-item'>
//         <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" >
//         <p>
//           {item.menu_name}
//         </p>
//         </img>

//       </div>

//     </div>

//   </div>
// // )
// import React from "react";
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <div className="explore-menu" id='explore-menu' >
//       <h1> Explore our menu </h1>
//       <p className='explore-menu-text' >
//         Indulge in a hand-picked menu crafted to delight every craving. At <b>Snackify</b>, every dish is more than food — it’s an experience designed to comfort, excite, and stay with you long after the last bite.
//       </p>
//       <div className="explore-menu-list" >
//         {menu_list.map((item, index) => {
//          return (<div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} >
//             <img  className={category === item.menu_name ? "active" : ""} 
//               src={item.menu_image}
//             />
            
//             <p>{item.menu_name}</p>
//           </div>)
// })}
//       </div>
//       <hr/>
//     </div>
//   )
// }

// export default ExploreMenu
import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Indulge in a hand-picked menu crafted to delight every craving. At{" "}
        <b>Snackify</b>, every dish is more than food — it’s an experience
        designed to comfort, excite, and stay with you long after the last bite.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${
              category === item.menu_name ? "active" : ""
            }`}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
