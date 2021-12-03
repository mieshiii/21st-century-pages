import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background: #ffdb15;
    height: 120px;
    margin-top: -120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 120px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px
`;

export const NavImg = styled.img`
    width: 115px;
    height: 115px;
    margin: 10px;
`;

export const NavLogo = styled(LinkRouter)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 18px;
    text-decoration: none;
    font-family: 'EB Garamond';
    font-weight: 500;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 8px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #000;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 110px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #000;
    display: flex;
    align-items: end;
    text-decoration: none;
    padding: 1rem 1rem;
    margin-left: 10px;
    height: 100%;
    cursor: pointer;
    font-family: 'News Cycle';
    font-weight: 700;

    &.active {
        border-bottom: 3px solid #000;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: end;
    padding: 1.5rem 0;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;

export const NavBtnRoute = styled(LinkRouter)`
    border-radius: 70px;
    background: #000;
    color: #fff;
    white-space: nowrap;
    justify-content: center;
    padding: 8px 20px;
    font-size: 20px;
    outline: none;
    border: 2px solid #000;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'News Cycle';
    font-weight: 700;

    &:hover{
        transition: all 0.1s ease-in-out;
        background: #fff;
        color: #000;
    }
`;