import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import PhonebookTitle from "components/PhonebookTitle/PhonebookTitle";
import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactsFilter from "components/ContactsList/Filter";
import { fetchContacts } from "redux/contactsSlice/operations";
import ContactsList from "components/ContactsList/ContactsList";
import { useToggle } from "hooks/useToggle";
import OpenFormBtn from "components/ContactsForm/OpenFormBtn/OpenFormBtn";
import { Wrapper } from "./PhonebookPage.styled";



const PhonebookPage = () => {
    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const { isOpen, open, close } = useToggle();
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <Wrapper>
                <PhonebookTitle />
                <OpenFormBtn open={open} isOpen={isOpen}/>
            </Wrapper>
            
            {
                isOpen && <ContactsForm isOpen={isOpen} close={close}/>
            }

            {
                !isOpen && <ContactsFilter />
            }
            
            
            
            {isLoading && <p>Loading tasks...</p>}
            {error && <p>{error}</p>}
            {contacts.length > 0 && !isOpen && <ContactsList />}
        </div>
    )

};

export default PhonebookPage;