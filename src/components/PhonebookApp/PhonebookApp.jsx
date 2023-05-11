import PhoneBackground from "components/PhoneBackground/PhoneBackground";
import Section from "components/Section/Section";

import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { Suspense } from "react";
import AppBar from "components/AppBar/AppBar";
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