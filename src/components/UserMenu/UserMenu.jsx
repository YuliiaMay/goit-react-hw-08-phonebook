import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/authSlice/operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useAuth();

    return (
        <div>
            <p>Logged in as
                <span> {user.user.name}</span>
            </p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
};

export default UserMenu;