import classes from '@components/Logo/Logo.module.css';
import cx from 'clsx';

const Logo = () => {
  //   const { classes } = useStyles();

  return (
    // <svg width="400" height="100" viewBox="0 0 400 100">
    //   <path
    //     className={classes.path}
    //     pathLength="10"
    //     d="m 0 0 h 300"
    //     stroke="white"
    //     stroke-width="15"></path>
    // </svg>
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 410.01 502.87"
      height="5rem">
      <defs />
      <g id="Artboard_1" data-name="Artboard 1">
        <path
          className={classes.path}
          //   fill="#3B5BDB"
          //   stroke="#3B5BDB"
          d="M456,528V137L658,271,863,137v53L659,323,500,218V500Z"
          transform="translate(-455.5 -136.07)"
        />
        <path
          className={classes.path}
          fill="#3B5BDB"
          stroke="#3B5BDB"
          strokeWidth="3"
          d="M865,247l-1.7,391L661.7,503.1,456,636.3l.2-53L661,451.1,819.7,556.8l1.2-282Z"
          transform="translate(-455.5 -136.07)"
        />
      </g>
    </svg>
  );
};

export default Logo;
