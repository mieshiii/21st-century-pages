import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#000' : '#ffdb15')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '20px')};
    outline: none;
    border: 2px solid #000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;
    font-family: 'News Cycle';
    font-weight: 700;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: ${({primary}) => (primary ? '#ffdb15' : '#000')};
        color: ${({dark}) => (dark ? '#000' : '#fff')};
    }
`;