import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './EventRegistrationModal.style';
import CustomCommonButton from '../../../common-components/custom-common-button/CustomCommonButton';
import {Overlay} from '@rneui/themed';
import CustomText from '../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../assets';
import Colors from '../../../resources/Colors';
import {eventsQuestions} from '../../../json/eventsJson/eventsJson';

const EventRegistrationModal = (props: any) => {
  const {isOpen, handleCloser,handleSuccessFullyApplied} = props;
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [queForEvents, setQueForEvents] = React.useState(eventsQuestions);

  const handleMajor = () => {
    setSelectedIndex(1);
  };

  const handleMinor = () => {
    setSelectedIndex(0);
  };

  const handleQueForEvents = id => {
    const newData = queForEvents?.map(element => {
      if (element.id === id) {
        return {
          ...element,
          isSelected: !element.isSelected,
        };
      } else {
        return {
          ...element,
          isSelected: element?.isSelected,
        };
      }
    });
    setQueForEvents(newData);
  };

  return (
    <View>
      <Overlay
        animationType="slide"
        isVisible={isOpen}
        fullScreen={false}
        // onBackdropPress={handleCloser}
        overlayStyle={styles.overlayContainer}>
        <TouchableOpacity
          style={{position: 'absolute', top: -7, right: 14}}
          onPress={() => handleCloser()}>
          <Image style={styles.imageStyle} source={MediaAssets.ic_icon_close} />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: Colors.darkBlueMagentaColor,
            width: '100%',
            marginVertical: 12,
            padding: 12,
            borderRadius: 15,
            overflow: 'hidden',
            position: 'relative',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText style={styles.flashMessageRegular}>
              MUSICFEST
            </CustomText>
            <View
              style={{
                height: 30,
              }}>
              <CustomText style={styles.flashMessageHighLighted}>
                Music
              </CustomText>
            </View>
          </View>

          <View style={{marginHorizontal: 10}}>
            <CustomText
              style={{
                color: '#a8aebc',
                fontFamily: 'Comfortaa-Light',
                fontSize: 16,
              }}>
              Are you 18 and above?
            </CustomText>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 6,
                }}>
                <CustomText style={{color: '#576078'}}>Yes</CustomText>
                <TouchableOpacity onPress={handleMajor}>
                  <Image
                    style={{height: 25, width: 25}}
                    source={
                      selectedIndex == 1
                        ? MediaAssets.ic_oval_checked_icon
                        : MediaAssets.ic_oval_unchecked_icon
                    }
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 6,
                }}>
                <CustomText style={{color: '#576078'}}>No</CustomText>
                <TouchableOpacity onPress={handleMinor}>
                  <Image
                    style={{height: 25, width: 25}}
                    source={
                      selectedIndex == 0
                        ? MediaAssets.ic_oval_checked_icon
                        : MediaAssets.ic_oval_unchecked_icon
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <CustomText
                style={{
                  color: '#a8aebc',
                  fontFamily: 'Comfortaa-Light',
                  fontSize: 16,
                }}>
                Few questions to set you up for the event
              </CustomText>
              {queForEvents?.length > 0 &&
                queForEvents?.map((item: any) => {
                  return (
                    <View key={item.id}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <CustomText style={{color: '#576078'}}>
                          {item.question}
                        </CustomText>
                        <TouchableOpacity
                          onPress={() => handleQueForEvents(item.id)}>
                          <Image
                            style={{height: 25, width: 25, marginVertical: 6}}
                            source={
                              item?.isSelected
                                ? MediaAssets.ic_successcheckmark
                                : MediaAssets.ic_oval_unchecked_icon
                            }
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>

          <View style={styles.textContainer}>
            <View style={styles.buttonContainer}>
              <CustomCommonButton
                onPress={() => handleSuccessFullyApplied()}
                name={'Make Payment of Rs. 499'}
              />
            </View>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default EventRegistrationModal;
