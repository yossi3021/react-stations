// DO NOT DELETE
import React from 'react';

const DogImage = (props) => {
  return (
    <div className="image-container">
      <img src={props.url} alt='Dog' className="dog-image" />
    </div>
  );
};

export default DogImage;
