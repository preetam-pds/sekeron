import React, { Fragment, useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import MediaAssets from '../../assets';
import Avathar from '../../common-components/avathar/Avathar';

const MyEventsComponent = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        //GetData()
    }, [selectedTab]);
    const handleIsSelected = value => {
        if (value === selectedTab) return true;
        return false;
    };

    const RenderEvents = props => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#0d0d0d',
                    borderRadius: 18,
                    margin: 10,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' , borderBottomColor: '#151518', borderBottomWidth: 1}}>
                    <Image
                        style={{ width: 70, height: 80 }}
                        source={MediaAssets.profile_pic}
                    />
                    <View style={{ flexGrow: 1, padding: 10 }}>
                        <View>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontFamily: 'Comfortaa-Bold',
                                    fontSize: 14,
                                }}>
                                Mute the Saint
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    color: '#526aab',
                                    fontFamily: 'Comfortaa-Bold',
                                    fontSize: 12,
                                }}>
                                Hosted by Sekeron
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 10,
                            }}>
                            <View
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: 5,
                                    paddingVertical: 3,
                                }}>
                                <Text
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Comfortaa-Bold',
                                        fontSize: 12,
                                    }}>
                                    Photowalk
                                </Text>
                            </View>
                            <View>
                                <Avathar maxLength={3} />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10}}>
                        <Image style={{height: 15, width: 15}} source={MediaAssets.ic_calander_open_icon} />
                        <Text style={{
                                        color: '#a8aebc',
                                        fontFamily: 'Comfortaa-Bold',
                                        fontSize: 12,
                                        marginHorizontal: 10
                                    }}>7PM, 12th June - 9AM 14th August</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Image style={{height: 15, width: 15}}source={MediaAssets.ic_location_icon} />
                        <Text style={{
                                        color: '#a8aebc',
                                        fontFamily: 'Comfortaa-Bold',
                                        fontSize: 12,
                                        marginHorizontal: 10
                                    }}>Jaynagar, Bengaluru</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <Fragment>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => setSelectedTab(0)}>
                    <Text
                        style={{
                            fontFamily: 'Comfortaa-Light',
                            fontSize: 12,
                            color: handleIsSelected(0) ? '#ced4e5' : '#6c707d',
                            borderColor: handleIsSelected(0) ? '#576078' : '#25272c',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            borderRadius: 18,
                            borderWidth: 1,
                        }}>
                        Ongoing
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(1)}>
                    <Text
                        style={{
                            fontFamily: 'Comfortaa-Light',
                            fontSize: 12,
                            color: handleIsSelected(1) ? '#ced4e5' : '#6c707d',
                            borderColor: handleIsSelected(1) ? '#576078' : '#25272c',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            borderRadius: 18,
                            borderWidth: 1,
                        }}>
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(2)}>
                    <Text
                        style={{
                            fontFamily: 'Comfortaa-Light',
                            fontSize: 12,
                            color: handleIsSelected(2) ? '#ced4e5' : '#6c707d',
                            borderColor: handleIsSelected(2) ? '#576078' : '#25272c',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            borderRadius: 18,
                            borderWidth: 1,
                        }}>
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <RenderEvents />
                <RenderEvents />
            </ScrollView>
        </Fragment>
    );
};

export default MyEventsComponent;
