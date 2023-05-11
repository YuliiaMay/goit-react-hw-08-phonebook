import styled from "styled-components";


// export const Wrapper = styled.div`
//     margin-bottom: 30px;
// `;

export const FormTitle = styled.h1`
    color: #006B99;
    margin-top: 16px;
    font-size: 28px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 32px;
    border: 3px solid #fff;
    padding: 12px;
`;

// export const Title = styled.h1`
//     margin-bottom: 16px;
//     font-size: 18px;
//     font-weight: 600;
//     color: #0070A0;    
// `;

export const ContactFormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #006B99;
    font-size: 14px;
`;

export const ContactInput = styled.input`
    width: 250px;
    height: 30px;
    margin-bottom: 16px;
    background-color: transparent;
    border: 2px solid #0070A0;
    border: 2px solid #0070A0;
    box-shadow: 4px 2px 1px 1px #0070A0;

    &:hover,
    &:focus {
        box-shadow: none;
        border: 2px solid #0070A0;
        color: #0070A0;
    }
`;

export const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`;

export const CancelFormBtn = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 20px;
    background-color: transparent;
    border: 2px solid #0070A0;
    box-shadow: 4px 2px 1px 1px #0070A0;
    border: 2px solid #fff;
    color: #0070A0;

    &:hover,
    &:focus {
        box-shadow: none;
        border: 2px solid #0070A0;
        color: #0070A0;
        background-color: #FFCFDA;
    }

    // &:hover,
    // &:focus {
    //     background-color: #FFCFDA;
    //     box-shadow: 4px 2px 1px 1px #FF3364;
    // }
`;

export const AddContactBtn = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 20px;
    background-color: transparent;
    border: 2px solid #0070A0;
    box-shadow: 4px 2px 1px 1px #0070A0;
    border: 2px solid #fff;
    color: #0070A0;

    &:hover,
    &:focus {
        box-shadow: none;
        border: 2px solid #0070A0;
        color: #0070A0;
        background-color: #BFFFC9;
    }

    // &:hover,
    // &:focus {
    //     background-color: #BFFFC9;
    //     box-shadow: 4px 2px 1px 1px #33FF54;
    // }
`;