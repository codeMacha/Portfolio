import styled from 'styled-components';
import { Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000': 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    height:80px;
    justify-content: space-between;
    padding: 0 240px;
    width: 100%;
    max-width: 1110px;
    z-index: 1;
`
export const NavLogo = styled(LinkRouter)`
    color: #d91414;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: cneter;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Navitem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: #d91414;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`
export const NavButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavButtonlink = styled(LinkRouter)`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #2bfcda;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer
    transition: all 0.2s ease-in-out;
    text-decorations: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #02473c;
        color: #9fc4be;
    }
`