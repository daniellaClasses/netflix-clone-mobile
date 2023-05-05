/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
// import { BASE_URL, API_KEY, IMG_ASSETS } from '@env';

import GenresMovie from '../components/Genres';

//Icons
import NetflixIcon from '../static/images/NetflixIcon.svg';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { ChevronDownIcon } from 'react-native-heroicons/solid';
import { UserIcon } from 'react-native-heroicons/solid';
import { PlayIcon as PlayIconSolid } from 'react-native-heroicons/solid';
import { InformationCircleIcon } from 'react-native-heroicons/outline';
import { PlusIcon } from 'react-native-heroicons/outline';

import LANGUAGES from '../languages';

import ImageColors from 'react-native-image-colors';

//React-Native
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';


import requests from '../lib/requests';
// import LinearGradient from 'react-native-linear-gradient';


const Home = () => {
  //API
  const imgAssets = process.env.IMG_ASSETS;  // console.log(apiKey);

  //heroMovie
  const [heroMovie, setHeroMovie] = useState();
  const [heroMovieColor, setHeroMovieColor] = useState();
  // const [trendingMovies, setTrendingMovies] = useState();
  // const [trendingTv, setTrendingTv] = useState();

  useEffect(() => {
    fetch(`${requests.fetchTopRated}`)
      .then(res => res.json())
      .then((data) => {
        console.log('MOVIES', data.results[8]);
        setHeroMovie(data.results[8]);
      });
  }, []);


  useEffect(() => {
    if (heroMovie) {
      getImageColors(`${imgAssets}${heroMovie?.backdrop_path}`);
    }
  }, [imgAssets, heroMovie]);

  const getImageColors = async (uri) => {
    const result = await ImageColors.getColors(
      uri,
      {
        fallback: '#228822',
        cache: true,
        key: 'unique_key',
      })
      .then(res => console.log(res));
    setHeroMovieColor(result);
  };

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <KeyboardAvoidingView
          style={tw`flex-1 mb-[50]`}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={tw`flex-1 z-20`}>
            <View style={tw`flex flex-row p-3 justify-between`}>
              <NetflixIcon height={30} />
              <View style={tw`flex flex-row p-1 gap-2 items-center`}>
                <Pressable >
                  <MagnifyingGlassIcon color={tw.color('white')} size={20} />
                </Pressable>
                <Pressable style={tw`bg-red-600 w-7 h-7 rounded justify-center items-center `}
                >
                  <UserIcon color={tw.color('white')} size={20} />
                </Pressable>
              </View>
            </View>
            {/* SubHeader */}
            <View style={tw`flex flex-row justify-center gap-4 z-20`}>
              <Pressable>
                <Text style={tw`text-gray-500 text-base`}> Series </Text>
              </Pressable>
              <Text style={tw`text-gray-500 text-base`}> Películas </Text>
              <View style={tw`flex flex-row items-center gap-1`}>
                <Text style={tw`text-gray-500 text-base`}> Categorías</Text>
                <ChevronDownIcon color={tw.color('gray-500')} style={tw`mt-1`} size={15} />
              </View>
            </View>
          </View>

          {/* HeroContainer */}

          <ImageBackground
            source={{ uri: `${imgAssets}${heroMovie?.backdrop_path}` }}
            resizeMode="cover"
            style={tw`rounded-b-lg bg-white h-550px  overflow-hidden absolute top-0 inset-0`}
          >
            <View style={tw`flex flex-col justify-center self-center items-center z-20 top-80`}>
              <View style={tw`flex flex-row justify-center items-center mb-2`}>
                <NetflixIcon height={15} />
                <Text style={tw`text-white text-xs font-mono font-bold tracking-widest ml-[-10]`}>SERIE</Text>
              </View>
              <Text style={tw`text-white text-5xl p-2`}> {heroMovie?.title} </Text>
              {/* En más info, ponerle el original_title = idioma original */}
              {/* <View style={tw`flex flex-row gap-2`}>
              {
                LANGUAGES.map((language) => {
                  return (
                    <Text style={tw`text-white`}> {language.label} </Text>
                  );
                })
              }
              </View> */}
              <GenresMovie id={heroMovie.id} style={'text-white'}/>

              <View style={tw`flex flex-row gap-3 justify-center items-center p-2`}>
                <Pressable style={tw`flex flex-col items-center gap-1`}>
                  <PlusIcon color={tw.color('white')} style={tw`mt-1`} size={20} />
                  <Text style={tw`text-white text-xs`}>Mi lista</Text>
                </Pressable>
                <Pressable style={tw`w-32 h-10 bg-white rounded flex flex-row justify-center items-center`}>
                  <PlayIconSolid color={tw.color('black')} style={tw`mt-1`} size={20} />
                  <Text style={tw`text-base`}> Reproducir </Text>
                </Pressable>
                <Pressable style={tw`flex flex-col items-center`}>
                  <InformationCircleIcon color={tw.color('white')} style={tw`mt-1`} size={20} />
                  <Text style={tw`text-white text-xs`}>Información</Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
          {/* <LinearGradient/> */}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView >
  );
};

export default Home;
