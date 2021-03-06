import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import Wrapper from '../common/wrapper/Wrapper';

const Mug = ({ size, color, mood }) => (
  <Wrapper
    style={{ width: size * 1.5, height: size }}
    width={size * 1.5}
    height={size}
    color={color}
  >
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 172 115"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-mug">
        <g id="kawaii-mug__body" fillRule="nonzero">
          <path d={paths.shape} id="kawaii-mug__shape" fill={color} />
          <path
            d={paths.shadow}
            id="kawaii-mug__shadow"
            fill="#000"
            opacity=".1"
          />
        </g>
        <Face mood={mood} transform="translate(71 42)" />
      </g>
    </svg>
  </Wrapper>
);

Mug.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck']),
  /**
   * Hex color
   */
  color: PropTypes.string,
};

Mug.defaultProps = {
  size: 170,
  mood: 'blissful',
  color: '#A6E191',
};

export default Mug;
