import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

const AppBar = () => {
  const login = useSelector(selectIsLoggedIn);
  return (
    <div className='pt-4 pb-16 opacity-bg-opasity'>
      <div className='flex w-[80%] rounded-xl m-auto mb-4 py-4 px-12 justify-between bg-background items-center'>
        <NavLink to='/' className='text-light-blue font-bold text-2xl'>
          Organize<span className='text-green'>Me</span>
        </NavLink>
        <div className='flex'>
          <Navigation />
          {!login && <AuthNav />}
        </div>
        <div className='flex'>
          {login && <UserMenu />}
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};
export default AppBar;
