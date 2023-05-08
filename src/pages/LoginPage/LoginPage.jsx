import { useDispatch } from "react-redux";
import { logIn } from "redux/authSlice/operations";

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.name.email,
                password: form.elements.name.password
            })
        );

        form.reset();
    }

    return (
        <>
            <h1>Log In</h1>
            <form>
                <label>
                    Email
                    <input type="email" />
                </label>   
                <label>
                    Password
                    <input type="password" />
                </label>   
                <button>Log In</button>
            </form>
        </>
    )
};

export default LoginPage;