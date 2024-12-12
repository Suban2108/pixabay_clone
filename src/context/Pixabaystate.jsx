import React, { useEffect, useState } from 'react';
import PixabayContext from './pixabayContext';

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [queryData, setQueryData] = useState();
  const api_key = '47597537-a58ac4a6a94b7c12edbb2ad8c';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${api_key}&q=${queryData}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImageData(data.hits);
      } catch (error) {
        console.error('Error fetching Pixabay data:', error);
      }
    };

    fetchData();
  }, [queryData]);

  const fetchImageDataByCat = async(cat) =>{
        try {
            const response = await fetch(
              `https://pixabay.com/api/?key=${api_key}&image_type=photo&category=${cat}`
            );
            const data = await response.json();
            setImageData(data.hits);
          } catch (error) {
            console.error('Error fetching Pixabay data:', error);
          } 
  }

  const fetchImageDataByLoc = async(loc) =>{
        try {
            const response = await fetch(
              `https://pixabay.com/api/?key=${api_key}&q=${loc}&image_type=photo`
            );
            const data = await response.json();
            setImageData(data.hits);
          } catch (error) {
            console.error('Error fetching Pixabay data:', error);
          } 
  }

  return (
    <PixabayContext.Provider value={{ imageData, fetchImageDataByCat, fetchImageDataByLoc, setQueryData }}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
