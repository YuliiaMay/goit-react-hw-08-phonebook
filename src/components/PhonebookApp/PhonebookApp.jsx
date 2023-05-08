import PhoneBackground from "components/PhoneBackground/PhoneBackground";
import Section from "components/Section/Section";
import PhonebookTitle from "components/PhonebookTitle/PhonebookTitle";
import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactsFilter from "components/ContactsList/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/contactsSlice/operations";
import { useEffect } from "react";
import ContactsList from "components/ContactsList/ContactsList";

const PhonebookApp = () => {
    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();



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

export default PhonebookApp;