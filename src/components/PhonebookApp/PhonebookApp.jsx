import PhoneBackground from "components/PhoneBackground/PhoneBackground";
import Section from "components/Section/Section";
import PhonebookTitle from "components/PhonebookTitle/PhonebookTitle";
import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactsFilter from "components/ContactsList/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/contactsSlice/operations";
import { Suspense, useEffect } from "react";
import ContactsList from "components/ContactsList/ContactsList";
import AppBar from "components/AppBar/AppBar";
import HomePage from "pages/HomePage/HomePage";
import { Outlet } from "react-router-dom";


const PhonebookApp = () => {
    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();



    return (
        <main>
            <PhoneBackground />
            <Section>
                <AppBar />

                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Section>
        </main>
    )
};

export default PhonebookApp;