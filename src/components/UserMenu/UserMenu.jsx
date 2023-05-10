import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/authSlice/operations";
import { MenuWrapper, UserName, LogOutBtn } from "components/UserMenu/UserMenu.styled";
import { FiLogOut } from "react-icons/fi";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useAuth();

    return (
        <MenuWrapper>
            <p>Logged In as
                <UserName> {user.user.name}</UserName>
            </p>
            <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
                <FiLogOut size="20"/>
            </LogOutBtn>
        </MenuWrapper>
    )
};

export default UserMenu;