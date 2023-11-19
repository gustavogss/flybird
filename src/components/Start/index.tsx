import { View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import LOGO from '../../assets/images/logo.png'
import PLAY from '../../assets/images/play.png'
import styles from './styles'

export function Start(handleOnStartGame) {
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo}/>
      <TouchableWithoutFeedback onPress={handleOnStartGame}>
        <Image source={PLAY} style={styles.playbtn} />
      </TouchableWithoutFeedback>
    </View>
  )
}