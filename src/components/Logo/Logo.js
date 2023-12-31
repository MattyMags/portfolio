import classes from '@components/Logo/Logo.module.css';

const Logo = () => {
  return (
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
          d="M456,528V137L658,271,863,137v53L659,323,500,218V500Z"
          transform="translate(-455.5 -136.07)"
        />

        <path
          className={classes.path}
          d="M865,247l-1.7,391L661.7,503.1,456,636.3l.2-53L661,451.1,819.7,556.8l1.2-282Z"
          transform="translate(-455.5 -136.07)"
        />
      </g>
    </svg>
  );
};

export default Logo;
