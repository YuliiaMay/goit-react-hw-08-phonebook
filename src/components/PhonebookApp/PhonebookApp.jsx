import PhoneBackground from "components/PhoneBackground/PhoneBackground";
import Section from "components/Section/Section";
import { Suspense } from "react";
import AppBar from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";


const PhonebookApp = () => {
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