import {View, Image, Platform} from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import {styles} from './CreatePostAudio.style';
import CustomText from '../../common-components/custom-text/CustomText';
import MediaAssets from '../../assets';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { PlatformEnum } from '@sekeron/domain';
var  RNFS = require( 'react-native-fs')

const CreatePostAudio = ({handleAudioClick, uri}) => {
  const [audioList, setAudioList] = useState<any>([])
  const data:any = []
  const getAudioFiles = (dirPath) => {
    RNFS.readDir(dirPath)
      .then(files => {
        files.forEach(file => {
          if (file.isDirectory()) {
            getAudioFiles(file.path);
          } else if (file.isFile() && (file.name.endsWith('.mp3')|| 
                file.name.endsWith('.m4a') || file.name.endsWith('.aac') || file.name.endsWith('.wav'))){
                  data.push({
                    path: file.path,
                    name: file.name
                  })
                }
        });
      })
      .catch(err => {
        console.log(err.message);
      });
      return data
  }
  useEffect(() => {
    let data:any=[]
  if(Platform.OS === PlatformEnum.android) {
     data = getAudioFiles(RNFS.ExternalStorageDirectoryPath)
  }
  if(Platform.OS === PlatformEnum.ios){
    RNFS.readDir(RNFS.LibraryDirectoryPath) // On Android, use RNFS.ExternalStorageDirectoryPath
    .then((result) => {
      result.forEach(file => {
          if(file.isFile() && (file.name.endsWith('.mp3')|| 
          file.name.endsWith('.m4a') || file.name.endsWith('.aac') || file.name.endsWith('.wav'))){
            data.push({
              path: file.path,
              name: file.name
            })
          }
      });
      
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
  }
  setAudioList(data)
  },[])


  return (
    <Fragment>
      <ScrollView style={styles.audioContainer}>
        {audioList && audioList.map((audio, index) => {
          return (
          <TouchableOpacity key={audio.name} onPress={() => handleAudioClick(audio.path)}>
              <View style={uri.includes(audio.path) ? {...styles.shareContainer, ...styles.addBorder} : styles.shareContainer }>
              <Image style={styles.SharePostImage} source={MediaAssets.ic_play} />
              <CustomText style={styles.SharePostMessage}>{audio.name}</CustomText>
            </View>
          </TouchableOpacity>
        )
        })}
      </ScrollView>
    </Fragment>
  );
};

export default CreatePostAudio;