import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <PositionedLogo />
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
            </MainHeader>
        </header>
    );
};

const PositionedLogo = styled(Logo)`
    top: 21px;
    left: 32px;
    position: absolute;
`;

const MainHeader = styled.div`
    padding: 26px 32px;
    border-bottom: 1px solid ${COLORS.gray[300]};

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Nav = styled.nav``;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }

    margin-right: 48px;
    &:last-of-type {
        margin-right: 0;
    }
`;

export default Header;
