import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Password is required'),
  });

  const handleRegister = (value, options) => {
    dispatch(register(value));
    console.log(value);
    options.resetForm();
  };

  return (
    <div className='w-[80%] m-auto'>
      <h2 className='text-center text-text-light font-bold text-4xl mb-8'>
        Registration
      </h2>
      <div className='flex items-baseline gap-8'>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={orderSchema}
          onSubmit={handleRegister}
        >
          <Form className='flex flex-col min-w-[400px] items-center gap-4 bg-bg-gray  p-8 rounded-xl'>
            <label className='flex flex-col font-semibold'>
              <div className='flex justify-between'>
                <p className='text-text-light mb-1'>Name</p>
                <ErrorMessage className='text-red' name='name' component='p' />
              </div>
              <Field
                className='py-2 px-5 h-8 rounded-md  border-2 outline-none  text-base font-medium shadow-custom-black  focus:border-green'
                name='name'
                placeholder='Enter Name'
              />
            </label>
            <label className='flex flex-col font-semibold'>
              <div className='flex justify-between'>
                <p className='text-text-light mb-1'>Email</p>
                <ErrorMessage className='text-red' name='email' component='p' />
              </div>
              <Field
                className='py-2 px-5 h-8 rounded-md  border-2 outline-none  text-base font-medium shadow-custom-black  focus:border-green'
                name='email'
                placeholder='Enter email'
              />
            </label>
            <label className='flex flex-col font-semibold mb-2'>
              <div className='flex justify-between'>
                <p className='text-text-light mb-1'>Password</p>
                <ErrorMessage
                  className='text-red'
                  name='password'
                  component='p'
                />
              </div>
              <Field
                className='py-2 px-5 h-8 rounded-md  border-2 outline-none  text-base font-medium shadow-custom-black  focus:border-green'
                name='password'
                placeholder='Enter the password'
              />
            </label>
            <button
              className='py-2 px-5 m-auto font-bold bg-background text-text-light rounded-lg transition-all shadow-custom-btn hover:bg-hover-blue hover:text-green'
              type='submit'
            >
              Register
            </button>
            <NavLink
              className='underline text-text-light opacity-50 transition-all duration-300 hover:text-green'
              to='/register'
            >
              Have account? Login
            </NavLink>
          </Form>
        </Formik>
        <div>
          <p className='text-text-light font-semibold text-3xl'>
            Register to access your contacts.
            <br /> Your email will be used as your login in the future.
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
