/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';

import tw from 'twrnc';
import { Text, View } from 'react-native';

const GenresMovie = ({id, style}) => {
  const baseURL = 'https://api.themoviedb.org/3';
  const API_KEY = '233fa8f526c6e3a353354760ca97320c';
  const [genres, setGenres] = useState();

  useEffect(() => {
    fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setGenres(data.genres);
      });
  }, [id]);
  return (
    <View style={tw`flex flex-row gap-2`}>
      {genres?.map(genre => {
        return <Text key={genre.id} style={tw`${style}`}>{genre.name}</Text>;
      })}
    </View>
  );
};

export default GenresMovie;
