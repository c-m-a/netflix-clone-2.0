import { useEffect, useState } from 'react';

import styled from 'styled-components';

export default function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    // Clean event
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <NavContainer show={show}>
      <ImgLogo src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-6.png" alt="Netflix Logo" />
      <ImgAvatar src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avatar image" />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 2.8rem 5.7rem;
  background-color: ${props => props.show && 'var(--nav-bg-color)'};
  z-index: 1;

  /* Animations */
  transition-timing-function: ease-in;
  transition: all .5s;
`;

const ImgLogo = styled.img`
  display: fixed;
  width: 13.4rem;
  height: 3.6rem;
  cursor: pointer;
`;

const ImgAvatar = styled.img`
  display: fixed;
  width: 3rem;
  height: 3rem;
`;
