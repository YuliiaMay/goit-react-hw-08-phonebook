import AppBar from "components/AppBar/AppBar";
import PhonebookApp from "components/PhonebookApp/PhonebookApp";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./Layout.styled";


const Layout = () => {
    return (
        <Wrapper>
            <div>
                <PhonebookApp />
            </div>
            {/* <div>
                <h1>Phonebook App</h1>
            </div> */}
        </Wrapper>
    )
};

export default Layout;