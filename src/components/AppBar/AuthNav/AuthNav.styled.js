import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAuthNavLink = styled(NavLink)`
    text-decoration: none;
    color: #b1b1b1;
    font-size: 18px;

    &:not(:last-child) {
        margin-right: 12px;
    }

    &.active {
        color: #006B99;
    }
`;

