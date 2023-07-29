import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
    
    <div className="flex" >
      <div className=" w-1/5  h-screen bg-white ">
      <nav>

      <div  className='logo'>
        <div  className='text-animate'> 
        <h3  className='title'>SHAFFAN 
        </h3></div></div>

        

        <ul className='m-10 sidebar '>
          <li className='home-link '>
            <Link to="/"><b>Home</b></Link>
          </li>
          <li className=' product-link'>
            <Link to="/Productmanagement"><b>Product</b></Link>
          </li>
          <li className='m-3  user-link'>
            <Link to="/Usermanagement"><b>User</b></Link>
          </li>
        </ul>
      </nav>
      </div>

    
<div className="w-4/5 flex  justify-center p-12 m-12 ">
      <Outlet />
      </div>
      </div>
    </>
  )
};

export default Layout;