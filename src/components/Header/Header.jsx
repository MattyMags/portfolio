import React from 'react'
import cx from 'clsx';
import classes from '@components/Header/Header.module.css';

import { Container } from '@mantine/core'

const Header = () => {
  return (
    <Container className={cx(classes.container)}>Header</Container>
  )
}

export default Header