

// import { } from "react-router-dom";





// const Navber = () => {



//     const navItem =
//         <>
//             <div className="lg:flex justify-around px-10">
//                 <div className="lg:flex">
//                     <li>Skin Care</li>
//                     <li>Body & Hand</li>
//                     <li>Hair</li>
//                     <li>Fragrance</li>
//                     <li>Home</li>
//                     {/* <li><NavLink to='/'>Home</NavLink></li> */}
//                     <li>Kits & Travel</li>
//                     <li>Gifts</li>
//                     <li>Read</li>
//                     <li>Stores</li>
//                     <li>Facial Appointments</li>
//                 </div>
//                 <div className="lg:flex ml-96">
//                     <li>Login</li>
//                     <li>Cabinet</li>
//                     <li>Cart</li>
//                 </div>
//             </div>

//         </>

//     return (
        

//         <div className="navbar fixed bg-white text-black z-10">
//             <div className="navbar-start">
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                       {navItem}
//                     </ul>
//                 </div>
//                 {/* <a className="btn btn-ghost normal-case text-xl">
//                     <img style={{ width: '50px' }} src="https://i.ibb.co/jrsk83C/mixing-f2031564.png" alt="" />
//                     Cuisine <span className='text-red-500'>Qi</span>
//                 </a> */}
//             </div>

//             <div className="lg:navbar-end">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu  menu-sm dropdown-content mr-28 mt-3 p-2 shadow bg-emerald-900 flex-none">
//                         {navItem}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navber;



// // import { NavLink } from 'react-router-dom'


// // const Navber = () => {


   

// //     const navItem = 
// //     <>
// //         <li><NavLink to='/'>Home</NavLink></li>
// //         <li><NavLink to='/blog'>Blog</NavLink></li>
// //         <li><NavLink to='/about'>About</NavLink></li>
// //         <li><NavLink to='/contact'>Contact</NavLink></li>

// //     </>
// //     return (
// //         <div className="navbar fixed bg-slate-600 text-white z-10">
// //             <div className="navbar-start">
// //                 <div className="dropdown">
// //                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
// //                     </label>
// //                     <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-emerald-900 flex-none">
// //                         {navItem}
// //                     </ul>
// //                 </div>
// //                 <a className="btn btn-ghost normal-case text-xl">
// //                     <img style={{width:'50px'}} src="https://i.ibb.co/jrsk83C/mixing-f2031564.png" alt="" />
// //                     Cuisine <span className='text-red-500'>Qi</span>
// //                 </a>
// //             </div>
// //             <div className="navbar-center hidden lg:flex">
// //                 <ul className="menu menu-horizontal px-1">
// //                     {navItem}
// //                 </ul>
// //             </div>
// //             <div className="navbar-end">
          
// //                     {/* <>
// //                          <img title="Pizza Food" style={{width:"40px"}} className="rounded-lg mr-4" src='https://i.ibb.co/Bz4Ts9T/gettyimages-1301151665-612x612.jpg' alt="" />
// //                         <button className='btn text-white bg-red-950' onClick={handleLogout}>LogOut</button>
// //                     </>
// //                     :
// //                   <> <Link to='/login'><button className="btn btn-info">Login</button></Link> </>
// //                 */}
// //             </div>
// //         </div>
   
// //     );
// // };

// // export default Navber;

import { NavLink } from "react-router-dom";
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navber = () => {
    const navRef = useRef();

    const showNavber = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header style={{ padding: '8px 9%' }} className="header fixed top-0 left-0 z-10  w-full flex justify-between">
            <div className="mr-96">
                <NavLink className="text-3xl mt-8 font-semibold text-white ">Jobewel</NavLink>
            </div>

            {/* <div><i className='bx bx-menu' id='menu-icon'></i></div> */}
         
                <nav ref={navRef} className="lg:-mr-64">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/project'>Project</NavLink>
                    <NavLink to='/education'>Education</NavLink>
                    <NavLink to='/skills'>Skills</NavLink>
                    <NavLink to='/blog'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='https://drive.google.com/file/d/1roukgvEZ8vuvvc6lfTe57fUGAMunyhIT/view?usp=sharing' target="_blank">Resume Download</NavLink>
                    <button className="nav-btn nav-close-btn" onClick={showNavber}>
                        <FaTimes />
                    </button>
                </nav>
          
            <button className="nav-btn" onClick={showNavber}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navber;