import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(authContext);
  const handleLogout=()=>{
      //logut
      logOut()
      .then(()=>{
        // console.log('logout Succesfully');
      })
      .catch(()=>{
        // console.log('error');
      })

  }
  const list = (
    <>
      <NavLink
        className="mr-5 text-lg hover:text-red-500"
        style={({ isActive }) => ({
          color: isActive ? "red" : "",
          textDecoration: isActive ? "underline" : "",
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="mr-5 text-lg hover:text-red-500"
        style={({ isActive }) => ({
          color: isActive ? "red" : "",
          textDecoration: isActive ? "underline" : "",
        })}
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="mr-5 text-lg hover:text-red-500"
        style={({ isActive }) => ({
          color: isActive ? "red" : "",
          textDecoration: isActive ? "underline" : "",
        })}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="mr-5 text-lg hover:text-red-500"
        style={({ isActive }) => ({
          color: isActive ? "red" : "",
          textDecoration: isActive ? "underline" : "",
        })}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Firebase</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mr">{list}</ul>
      </div>
      <div className="navbar-end">
        {
          user? <> <div className="mr-5">{user.email}</div> <button onClick={handleLogout} className="btn btn-secondary"><Link to="/login">Logout</Link></button></>: <button className="btn btn-secondary"><Link to="/login">Login</Link></button>
        }
      </div>
    </div>
  );
};

export default Navbar;
