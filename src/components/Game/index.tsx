import { View, Text } from 'react-native'
import React from 'react'
import { Start } from '../Start'

export function Game() {
    function handleOnStartGame(){
        
    }
  return (
    <Start handleOnStartGame={handleOnStartGame}/>
  )
}