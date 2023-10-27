import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Text } from '@mantine/core';
import { useState } from 'react';
import clsx from 'clsx';

import DarkModeToggle from 'react-dark-mode-toggle';
import classes from '@components/ColorSchemeToggle/ColorScheme.module.css';

const ColorSchemeToggle = () => {
  const [clicks, setClicks] = useState(0);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <div className={classes.container} onClick={() => setClicks(clicks + 1)}>
      <DarkModeToggle
        onChange={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
        checked={computedColorScheme === 'dark'}
        size={90}
      />
      {/* {true  && ( */}
      <Text className={clsx(clicks < 5 && classes.hidden)} fz={'.7rem'}>
        Easy now, you're gonna break it.
      </Text>
      <Text className={clsx(clicks < 5 && classes.hidden)} fz={'.7rem'}>
        {clicks} clicks so far.
      </Text>
      {/* )} */}
    </div>
  );
};

export default ColorSchemeToggle;
