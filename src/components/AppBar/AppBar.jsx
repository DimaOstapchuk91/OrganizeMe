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
    <div className='pt-4  w-[80%] m-auto'>
      <div className='flex  rounded-xl  mb-10 py-4 px-12 justify-between bg-background items-center'>
        <NavLink to='/' className='text-text-light font-bold text-2xl'>
          Organize<span className='text-green'>Me</span>
        </NavLink>
        <div className='flex'>
          {!login && <AuthNav />}
          {login && <UserMenu />}
          <ThemeToggleButton />
        </div>
      </div>
      <div className=' mb-[11px]'>
        <Navigation />
      </div>
    </div>
  );
};
export default AppBar;
