import React, {Fragment} from 'react';
import {Image, Text, View} from 'react-native';
import CustomText from '../custom-text/CustomText';
import styles from './Avathar.Style';

const Avathar = (props: any) => {
  const {greyColor,darkYellowColor} = props;

  const Avathar = [
    {
      im: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
      id: 1,
      email: 'anup@emproto.com',
      name: 'nup',
    },
    {
      im: 'https://images.pexels.com/photos/415627/pexels-photo-415627.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 2,
      email: 'gotoanup94@gmail.com',
      name: 'anp',
    },
    {
      im: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
      id: 3,
      email: 'anup94@gmail.com',
      name: 'anu',
    },
    {
      im: 'https://images.pexels.com/photos/415627/pexels-photo-415627.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 4,
      email: 'anup@gmail.com',
      name: 'anup',
    },
    {
      im: 'https://images.pexels.com/photos/415627/pexels-photo-415627.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 5,
      email: 'anup@gmail.com',
      name: 'anup',
    },
    {
      im: 'https://images.pexels.com/photos/415627/pexels-photo-415627.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 6,
      email: 'anup@gmail.com',
      name: 'anup',
    },
  ];

  return (
    <View style={styles.avatharContainer}>
      {Avathar.map((item, index) => {
        return (
          <Fragment key={item.id}>
            {index + 1 <= props.maxLength ? (
              <Image
                style={styles.avatharImage}
                resizeMethod="resize"
                source={{uri: item.im}}
              />
            ) : null}
            {index + 1 === props.maxLength &&
            Avathar.length > props.maxLength ? (
              <CustomText
                style={[
                  styles.remainingAvatharLength,
                  {
                    color: greyColor
                      ? '#4e5567'
                      : darkYellowColor
                      ? '#f3a100'
                      : '#5c88ff',
                  },
                ]}>{`+${Avathar.length - props.maxLength} others`}</CustomText>
            ) : null}
          </Fragment>
        );
      })}
    </View>
  );
};
export default Avathar;
