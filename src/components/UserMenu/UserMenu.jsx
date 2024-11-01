import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logaut } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  const handleExit = () => {
    toast.success(`Goodbye ${userName.name}`, {
      duration: 4000,
      position: 'top-right',

      style: {
        borderRadius: '10px',
        background: 'var(--hover-blue)',
        color: 'aliceblue',
      },

      className: '',
      icon: '👋',
    });
    dispatch(logaut());
  };

  setTimeout(() => {
    toast.success(`Hello ${userName.name}`, {
      duration: 4000,
      position: 'top-right',

      style: {
        borderRadius: '10px',
        background: 'var(--hover-blue)',
        color: 'aliceblue',
      },

      className: '',
      icon: '👋',
    });
  }, 1000);
  return (
    <div className='flex gap-4 items-center'>
      <h2 className='text-light-blue font-bold text-2xl'>
        Hello!{' '}
        <span className='text-green'>
          {userName.name.charAt(0).toUpperCase() + userName.name.slice(1)}
        </span>
      </h2>
      <button
        onClick={handleExit}
        className='py-1 px-5 mr-4 !text-red bg-brand-blue rounded-md border-2 border-green text-light-blue font-bold transition-all duration-300 hover:text-green '
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
