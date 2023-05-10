import styled from "styled-components";

export const MenuWrapper =styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const UserName =styled.span`
    font-weight: bold;
`;


export const LogOutBtn  = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #0070A0;

    &:hover,
    &:focus {
        color: #FF3364;
    }
`;
