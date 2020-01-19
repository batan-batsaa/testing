import React, { useState } from 'react';
import { Collapse, Navbar, NavLink, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';

export default function AppNavBar() {
    const [ isOpen, setToggle ] = useState(false);
    const toggle = () => {
        setToggle(!isOpen);
    }
    return (
        <React.Fragment>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}
