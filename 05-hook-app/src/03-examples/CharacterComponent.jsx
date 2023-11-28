import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const CharacterComponent = ({ family, title, imageUrl, fullName }) => {
  
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [family])

  return (
    <>
      <blockquote className="blockquote text-center" style={{ display: 'block' }}>
          <p ref={pRef} className="mb-2">{ family }</p>
          <hr />
          <p className="mb-2">{ title }</p>
          <br />
          <footer className="blockquote-footer mb-3"> { fullName } </footer>
          <br />
          <img src={imageUrl} alt={fullName} />
      </blockquote>
      <br />
      <br />
      <hr />
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}

CharacterComponent.propTypes = {
    family: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
}