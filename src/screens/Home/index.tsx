import{ImageBackground, Text} from 'react-native'
import React from 'react'
import BACKGORUD from '../../assets/images/background.png';
import styles from './styles';
import { Game } from '../../components/Game';

export function Home() {
  return (
    <ImageBackground source={BACKGORUD} style={styles.container}>
     <Game />
    </ImageBackground>
  )
}
