// import React, { useState } from 'react'
// import './Loginpopup.css'
// import { assets } from '../../assets/assets'
// const Loginpopup = () => {
//     const[currentState,setcurrentState]=useState("Sign Up")
//   return (
//     <div className='login-popup'>
//         <form action="" className="login-popup-container">
//             <div className='login-popup-tittle'>
//                 <h2>
//                     {currentState}
                   
//                     <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
//                 </h2>

//             </div>
//             <div className='login-popup-inputs'>
//                 {currentState==="Login"?<></>:<input type='text' placeholder='Your name ' />}
//                 <input type='text' placeholder='your name' required/>
//                 <input type='email' placeholder='your email' required/>
//                 <input type='password' placeholder='password ' required/>
                


//             </div>
//             <button>
//                 { currentState==="Sign Up"?"Create account ":"Login"}
//             </button>
//                 <div className='login-popup-condition'>
//                     <input type='checkbox' required />
//                     <p>
//                         By continuing ,i agree to the terms of use & privacy policy
//                     </p>

//                 </div>
//                 {
//                     currentState==="Login"
//                     ?<p>Create a new account?<span onClick={()=>setcurrentState("Sign Up")} > Clcik here</span></p>
//                     :<p>Alredy have an account ?<span onClick={()=>setcurrentState("Login")} >Login here</span></p>
//                 }
//         </form>
//     </div>
//   )
// }

// export default Loginpopup
import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({ setShowLogin }) => {
    const [currentState, setcurrentState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className='login-popup-tittle'>
                    <h2>
                        {currentState}
                        <img
                            onClick={() => setShowLogin(false)}
                            src={assets.cross_icon}
                            alt="Close"
                            style={{ cursor: "pointer", marginLeft: "10px" }}
                        />
                    </h2>
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "Login" ? null : <input type='text' placeholder='Your name' />}
                    <input type='text' placeholder='your name' required />
                    <input type='email' placeholder='your email' required />
                    <input type='password' placeholder='password' required />
                </div>
                <button>
                    {currentState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p>
                        By continuing, I agree to the terms of use & privacy policy
                    </p>
                </div>
                {
                    currentState === "Login"
                        ? <p>Create a new account? <span onClick={() => setcurrentState("Sign Up")}>Click here</span></p>
                        : <p>Already have an account? <span onClick={() => setcurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Loginpopup