import {Pressable } from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({onPress, name,color}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons 
        name={name} size={24} color={color}
      />
    </Pressable>
  )
}

export default IconButton