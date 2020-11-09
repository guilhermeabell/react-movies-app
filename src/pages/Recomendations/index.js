import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { SvgXml } from "react-native-svg";
import { Animated } from 'react-native';

import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import Carousel from './components/carousel/carousel'

const Recomendations = () => {
  const svgMarkup = `<svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M39.1699 11.0748L0.163301 11.0358" stroke="#F4F4F4" stroke-width="2"/>
  <path d="M11.325 20.199L1.71831 11.5199C1.41787 11.2484 1.40969 10.7795 1.70047 10.4977L10.9984 1.48867" stroke="#F4F4F4" stroke-width="2"/>
  </svg>
  `;

  const ArrowLeft = () => <SvgXml xml={svgMarkup} />

  const translateY = new Animated.Value(0);

    return (
      <>
        <StatusBar style="light" />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <ArrowLeft />
            </TouchableOpacity>
          </View>

          <View style={styles.main}>
            <View style={styles.mainTitle}>
              <Text style={styles.title}>Olá, Pedro!</Text>
              <Text style={styles.subTitle}>Veja o que preparamos para você.</Text>
            </View>

            <View style={styles.carousel}>
              <Carousel translateY={translateY} />
            </View>
          </View>
        </View>
      </>
    );
}

export default Recomendations;
