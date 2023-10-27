import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import cx from 'clsx';
import classes from '@components/ColorSchemeToggle/ColorScheme.module.css';

import { IconSun, IconMoon } from '@tabler/icons-react';


const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

export default ColorSchemeToggle