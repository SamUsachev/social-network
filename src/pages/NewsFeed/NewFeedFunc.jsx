import React, { useState, useEffect } from 'react';

export const NewsFeedFunc = () => {
  const [coments, setComents] = useState([]);
  let interval;
  //   useEffect(() => {
  //     setComents([{}]);

  //     return () => {
  //       console.log('unmount');
  //     };
  //   }, []);

  const addComment = () => {
    setComents([{}]);
  };

  useEffect(() => {
    if (coments.length) {
      console.log('Делаем fetch');
    }
  }, [coments]);

  return <div onClick={addComment}>лента новостей</div>;
};
