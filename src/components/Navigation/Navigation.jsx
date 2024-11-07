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
            `mr-4 font-bold text-xl py-1 px-6 rounded-lg text-text-light bg-background transition-all duration-300 hover:text-green ${
              isActive ? '!text-green underline rounded-b-none pb-[9px]' : ''
            }`
          }
          to='/'
        >
          Home
        </NavLink>
        {loggedIn && (
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-bold text-xl py-1 px-6 rounded-lg bg-background text-text-light transition-all duration-300 hover:text-green ${
                isActive ? 'underline !text-green rounded-b-none pb-[9px] ' : ''
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
