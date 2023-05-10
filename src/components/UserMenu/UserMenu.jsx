import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/authSlice/operations";
import { MenuWrapper } from "components/UserMenu/UserMenu.styled";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useAuth();

    return (
        <MenuWrapper>
            <p>Logged In as
                <span> {user.user.name}</span>
            </p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </MenuWrapper>
    )
};

export default UserMenu;