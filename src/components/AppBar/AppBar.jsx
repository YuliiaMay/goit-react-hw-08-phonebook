
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import { Header } from "./AppBar.styled";
import { useAuth } from "hooks/useAuth";
import UserMenu from "components/UserMenu/UserMenu";

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {
                isLoggedIn 
                    ? <UserMenu />
                    : <AuthNav />
            }
        </Header>
    )
};

export default AppBar;
