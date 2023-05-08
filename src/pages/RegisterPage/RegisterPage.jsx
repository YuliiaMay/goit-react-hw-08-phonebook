import { useDispatch } from "react-redux";
import { RegisterForm, RegisterFormInput, RegisterFormLabel,RegisterFormBtn } from "./RegisterPage.styled";
import { register } from "redux/authSlice/operations";

const RegisterPage = () => {
    const dispatch = useDispatch();
    console.log(111);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.value,
                password: form.elements.password.value
            })
        )
        form.reset();
    };

    return (
        <>
            <h1>Register</h1>
            <RegisterForm onSubmit={handleSubmit}>
                <RegisterFormLabel>
                    User Name
                    <RegisterFormInput type="text" />
                </RegisterFormLabel>
                <RegisterFormLabel>
                    Email
                    <RegisterFormInput type="email" />
                </RegisterFormLabel>   
                <RegisterFormLabel>
                    Password
                    <RegisterFormInput type="password" />
                </RegisterFormLabel> 
                
            </RegisterForm>
            <RegisterFormBtn type="submit">Register</RegisterFormBtn>
            
        </>
    )
};

export default RegisterPage;