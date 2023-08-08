// DO NOT DELETE
import * as React from 'react';
import './App.css';
import Header from './Header';
import Description from './Description';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const dogUrlInitial = 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg';
  const [dogUrl, setDogUrl] = React.useState(dogUrlInitial);

  const fetchNewDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Description dogUrl={dogUrl} fetchNewDogImage={fetchNewDogImage} />
    </div>
  );
};
