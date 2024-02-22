import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #fff !important;
  color: black;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%; 
 
  max-width: 100%; 
  height: auto; 
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Logo src="/left-image.png" alt="Left Logo" />
      </div>
      <div>
        <Logo src="/logo2.png" alt="Middle Logo" />
      </div>
      <div>
        <Logo src="/logo3.png" alt="Right Logo" />
      </div>
    </NavbarContainer>


/*<NavbarContainer>
      <div>
        <Logo src="/left-image.png" alt="Left Logo" />
      
        <Logo src="/logo2.png" alt="Middle Logo" />
      
        <Logo src="/logo3.png" alt="Right Logo" />
      </div>
    </NavbarContainer>*/
  );
};

export default Navbar;
