import {Image} from 'react-native'
import React from 'react'

const FeedsImage = (props:any) => {
  return (
    <Image style={props.style} source={{uri:props.uri}}/>
  )
}

export default FeedsImage