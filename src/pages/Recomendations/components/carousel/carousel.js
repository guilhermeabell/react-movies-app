import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Image, View } from 'react-native'

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

export default function Tabs({ translateY }) {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d74a4cba36bf1866a2e986dc763e4127&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then((response) => {
      if (response && response.data) {
        setMovie(response.data.results)
      }
    })

  }, []) 

  console.log(movie)

  return (
    <>
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
    >
        
      {/* {movie.map((movie, index) => (
        <TabsContainer key={movie.id} >
          <TabItem>
            <Image source={{
              uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
            }} />
            <TabText>{movie.title}</TabText>
            <TabText>{movie.id}</TabText>
          </TabItem>
        </TabsContainer>
      ))} */}
    </Container>

<Container style={{
  transform: [{
    translateY: translateY.interpolate({
      inputRange: [0, 380],
      outputRange: [0, 30],
      extrapolate: 'clamp',
    }),
  }],
  opacity: translateY.interpolate({
    inputRange: [0, 380],
    outputRange: [1, 0.3],
    extrapolate: 'clamp',
  }),
}}
>

    <TabsContainer >
      <TabItem>
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/dGVUiqnahQ4ZZRchGRpO2SyhtQY.jpg`
        }} />
        <View>
          <TabText>Mulan</TabText>
          <TabText>Aventura, Ação</TabText>
        </View>
      </TabItem>

      <TabItem>
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/dGVUiqnahQ4ZZRchGRpO2SyhtQY.jpg`
        }} />
        <View>
          <TabText>Mulan</TabText>
          <TabText>Aventura, Ação</TabText>
        </View>
      </TabItem>

      <TabItem>
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/dGVUiqnahQ4ZZRchGRpO2SyhtQY.jpg`
        }} />
        <View>
          <TabText>Mulan</TabText>
          <TabText>Aventura, Ação</TabText>
        </View>
      </TabItem>

      <TabItem>
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/dGVUiqnahQ4ZZRchGRpO2SyhtQY.jpg`
        }} />
        <View>
          <TabText>Mulan</TabText>
          <TabText>Aventura, Ação</TabText>
        </View>
      </TabItem>
    </TabsContainer>
    

</Container>
</>
  );
}