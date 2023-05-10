import { StyledAuthNavLink } from "./AuthNav.styled";



const AuthNav = () => {
    return (
        <div>
            <StyledAuthNavLink to="/register">
                Register
            </StyledAuthNavLink>
            <StyledAuthNavLink to="/login">
                Log In
            </StyledAuthNavLink>
        </div>
    );
};

export default AuthNav;