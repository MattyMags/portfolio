import React from 'react';
import cx from 'clsx';
import classes from '@components/Header/Header.module.css';

import { Container } from '@mantine/core';
import Logo from '@components/Logo/Logo';

const Header = () => {
  return <Container className={cx(classes.container)}><Logo/></Container>;
};

export default Header;
