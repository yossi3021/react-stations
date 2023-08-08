// DO NOT DELETE
import React from 'react';
import DogImage from './DogImage';

const Description = ({ dogUrl, fetchNewDogImage }) => {
  return (
    <section className="app-section">
      <p>犬の画像を表示するサイトです</p>
      <DogImage url={dogUrl} />
      <p><button onClick={fetchNewDogImage} className="update-button">更新</button></p>
    </section>
  );
};

export default Description;
