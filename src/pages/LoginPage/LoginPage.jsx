import { useDispatch } from "react-redux";
import { logIn } from "redux/authSlice/operations";

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        console.log(form.elements.email.value);
        console.log(form.elements.password.value);

        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value
            })
        );

        form.reset();
    }

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" name="email"/>
                </label>   
                <label>
                    Password
                    <input type="password" name="password"/>
                </label>   
                <button type="submit">Log In</button>
            </form>
        </>
    )
};

export default LoginPage;