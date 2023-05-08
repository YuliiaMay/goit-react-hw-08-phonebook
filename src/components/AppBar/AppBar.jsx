
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import { Header } from "./AppBar.styled";

const AppBar = () => {
    return (
        <Header>
                {/* <Link to="/">Home</Link>
                <Link to="/phonebook">Phonebook</Link> */}
            <Navigation />
            <AuthNav />
            
        </Header>
    )
};

export default AppBar;