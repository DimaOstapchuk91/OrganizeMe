import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { useEffect, useRef } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contactData = useSelector(selectContacts);

  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current && contactData.length === 0) {
      dispatch(fetchContacts());
      firstLoad.current = false;
    }
  }, [dispatch, contactData]);

  return (
    <div className='flex w-[1000px] m-auto bg-blue p-8 rounded-xl gap-8'>
      <div className='flex flex-col'>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
};
export default ContactsPage;
