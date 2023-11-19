import{ImageBackground, Text} from 'react-native'
import React from 'react'
import BACKGORUD from '../../assets/images/background.png';
import styles from './styles';

export function Home() {
  return (
    <ImageBackground source={BACKGORUD} style={styles.container}>
     
    </ImageBackground>
  )
}
