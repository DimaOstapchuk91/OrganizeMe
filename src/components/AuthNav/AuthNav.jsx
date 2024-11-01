import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `mr-4 font-bold text-xl text-light-blue transition-all duration-300 hover:text-green ${
            isActive ? '!text-green underline' : ''
          }`
        }
        to='/register'
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-4 font-bold text-xl text-light-blue transition-all duration-300 hover:text-green ${
            isActive ? '!text-green underline' : ''
          }`
        }
        to='/login'
      >
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
