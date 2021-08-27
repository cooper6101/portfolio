import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from 'reactstrap';

const ScrollTransparentNavbar = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ''
      : ' navbar-transparent'
  );
  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(' navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={'fixed-top' + navbarColor} color='white' expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand to='/' tag={Link} id='navbar-brand'>
              Trey Cooper | MERN Developer
            </NavbarBrand>
            <UncontrolledTooltip target='navbar-brand'>
              Designed and Coded by Trey Cooper
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className='navbar-toggler'
            >
              <span className='navbar-toggler-bar top-bar'></span>
              <span className='navbar-toggler-bar middle-bar'></span>
              <span className='navbar-toggler-bar bottom-bar'></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className='ml-auto' id='ceva' navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  data-toggle='dropdown'
                  href='#pablo'
                  id='navbarDropdownMenuLink1'
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className='now-ui-icons education_atom'></i>
                  <p>View My Work</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby='navbarDropdownMenuLink1' right>
                  <Link to='/api-demos'>
                    <DropdownItem>
                      <i className='now-ui-icons arrows-1_cloud-download-93'></i>
                      API Demos
                    </DropdownItem>
                  </Link>
                  <Link to='/view-my-work'>
                    <DropdownItem>
                      <i className='now-ui-icons design_palette'></i>
                      My Projects
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to='/book-with-me'>
                  <Button className='nav-link btn-default' color='info'>
                    <p>Book an Interview</p>
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ScrollTransparentNavbar;
