import { RegisterForm, RegisterFormInput, RegisterFormLabel,RegisterFormBtn } from "./RegisterPage.styled";

const RegisterPage = () => {
    return (
        <>
            <h1>Register</h1>
            <RegisterForm>
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
            <RegisterFormBtn>OK</RegisterFormBtn>
            
        </>
    )
};

export default RegisterPage;