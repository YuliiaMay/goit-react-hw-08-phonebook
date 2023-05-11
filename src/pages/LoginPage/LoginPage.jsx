import { useDispatch } from "react-redux";
import { logIn } from "redux/authSlice/operations";
import { LoginForm, LoginFormLabel, LoginFormInput, Title, LoginFormBtn } from "./LoginPage.styled";

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
            <Title>Log In</Title>
            <LoginForm onSubmit={handleSubmit}>
                <LoginFormLabel>
                    Email
                    <LoginFormInput type="email" name="email"/>
                </LoginFormLabel>   
                <LoginFormLabel>
                    Password
                    <LoginFormInput type="password" name="password"/>
                </LoginFormLabel>   
                <LoginFormBtn type="submit">Log In</LoginFormBtn>
            </LoginForm>
        </>
    )
};

export default LoginPage;