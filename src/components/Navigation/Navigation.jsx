import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className=''>
        <NavLink
          className={({ isActive }) =>
            `mr-4 font-bold text-xl text-text-light transition-all duration-300 hover:text-green ${
              isActive ? '!text-green underline' : ''
            }`
          }
          to='/'
        >
          Home
        </NavLink>
        {loggedIn && (
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-bold text-xl text-text-light transition-all duration-300 hover:text-green ${
                isActive ? 'underline !text-green' : ''
              }`
            }
            to='/contacts'
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};
export default Navigation;
