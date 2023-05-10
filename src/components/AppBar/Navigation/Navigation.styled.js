import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HomeLink = styled(NavLink)`
    margin-right: 12px;
`;

export const PhonebookLink = styled(NavLink)`
    color: #0070A0;

    &.active {
        color: #32CD32;
    };

    &:hover,
    &:focus {
        color: #32CD32;
    }
`;

