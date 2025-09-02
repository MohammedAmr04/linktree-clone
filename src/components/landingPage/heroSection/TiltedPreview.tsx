import { Tilt } from 'react-tilt';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: 'X', // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const TiltedPreview = () => {
  return (
    <Tilt
      options={defaultOptions}
      style={{ height: 600, width: 600 }}
      className="mx-auto my-100 bg-red-500 flex justify-center items-center rounded-lg">
      <div className="absolute z-10">aaaaaaaaa</div>
      <div className="relative z-1000 w-10 h-10 bg-yellow-500"></div>
    </Tilt>
  );
};
export default TiltedPreview;
