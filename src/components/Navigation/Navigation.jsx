import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className=''>
        {loggedIn && (
          <div>
            <NavLink
              className={({ isActive }) =>
                `mr-4 font-bold text-xl py-2 px-6 rounded-lg text-text-light bg-background transition-all duration-300 hover:text-green ${
                  isActive
                    ? '!text-green underline rounded-b-none pb-[12px]'
                    : ''
                }`
              }
              to='/'
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `mr-4 font-bold text-xl py-2 px-6 rounded-lg bg-background text-text-light transition-all duration-300 hover:text-green ${
                  isActive
                    ? 'underline !text-green rounded-b-none pb-[12px] '
                    : ''
                }`
              }
              to='/contacts'
            >
              Contacts
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navigation;
