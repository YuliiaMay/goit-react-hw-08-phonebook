import AppBar from "components/AppBar/AppBar";
import PhonebookApp from "components/PhonebookApp/PhonebookApp";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                <div>
                    <PhonebookApp />
                </div>
                <div>
                    <h1>Phonebook App</h1>
                </div>
            </div>
            {/* <AppBar /> */}
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
};

export default Layout;