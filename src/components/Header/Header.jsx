import React from 'react';
import cx from 'clsx';
import classes from '@components/Header/Header.module.css';

import { Container } from '@mantine/core';
import Logo from '@components/Logo/Logo';
import ColorSchemeToggle from '@components/ColorSchemeToggle/ColorSchemeToggle';

const Header = () => {
  return (
    <Container className={cx(classes.container)} sz={'xl'}>
      <Logo />
      <ColorSchemeToggle />
    </Container>
  );
};

export default Header;
