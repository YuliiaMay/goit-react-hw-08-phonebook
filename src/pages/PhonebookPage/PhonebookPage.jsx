import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
// import PhoneBackground from "";
import Section from "components/Section/Section";
import PhonebookTitle from "components/PhonebookTitle/PhonebookTitle";
import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactsFilter from "components/ContactsList/Filter";
import { fetchContacts } from "redux/contactsSlice/operations";


const PhonebookPage = () => {
    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <main>
            <PhoneBackground />
            <Section>
                <PhonebookTitle/>
                <ContactsForm />
                <ContactsFilter />
                
                {isLoading && <p>Loading tasks...</p>}
                {error && <p>{error}</p>}
                {contacts.length > 0 && <ContactsList />}
                
            </Section>
        </main>
    )

};

export default PhonebookPage;