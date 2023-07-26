import { useDispatch } from "react-redux";
import { RegisterForm, RegisterFormInput, RegisterFormLabel,RegisterFormBtn, Title } from "./RegisterPage.styled";
import { register } from "redux/authSlice/operations";


const RegisterPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value
            })
        );
        
        form.reset();
    };

    return (
        <>
            <Title>Register</Title>
            <RegisterForm onSubmit={handleSubmit}>
                <RegisterFormLabel>
                    User Name
                    <RegisterFormInput type="text" name="name" />
                </RegisterFormLabel>
                <RegisterFormLabel>
                    Email
                    <RegisterFormInput type="email" name="email" />
                </RegisterFormLabel>   
                <RegisterFormLabel>
                    Password
                    <RegisterFormInput type="password" name="password" />
                </RegisterFormLabel> 

                <RegisterFormBtn type="submit">Register</RegisterFormBtn>    
            </RegisterForm>
            
            
        </>
    )
};

export default RegisterPage;