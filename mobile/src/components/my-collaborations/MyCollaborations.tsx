import React, { Fragment, useEffect, useState } from "react"
import { TouchableOpacity, View, Text, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import MediaAssets from "../../assets"

const MyCollaborationsComponent = () => {
    const [selectedTab , setSelectedTab] = useState(0)

    useEffect(() => {

        //GetData()

    },[selectedTab])
    const handleIsSelected = (value) => {
        if(value === selectedTab) return true
        return false
    }

    const RenderCollaborations = (props) => {
        return (
            <TouchableOpacity style={{
                backgroundColor: '#0d0d0d',
                borderRadius: 18,
                margin: 10

            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontFamily: 'Comfortaa-Light', fontSize: 12, color: '#576078' }}>SEPR220212</Text>
                    <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: 12, color: '#576078' }}>12/01/2022 - 09/07/2022</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Image style={{ width: 60, height: 60 }} source={MediaAssets.profile_pic} />
                    <View style={{ flexGrow: 1, padding: 10}}>
                        <View>
                            <Text style={{ color: '#fff', fontFamily: 'Comfortaa-Bold', fontSize: 14 }}>
                                Mute the Saint
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-evenly', }}>
                            <Image style={{ width: 15, height: 15 , borderRadius: 10, marginHorizontal: 5}} source={MediaAssets.profile_pic} />
                            <Text style={{ color: '#8891a9', fontFamily: 'Comfortaa-Bold', fontSize: 12 , marginHorizontal: 5}}>April Summers</Text>
                            <Image style ={{marginHorizontal: 5}}source={MediaAssets.ic_star}/>
                            <Text style={{ color: '#8891a9', fontFamily: 'Comfortaa-Bold', fontSize: 12 , marginHorizontal: 5}}>4.3</Text>
                            </View>
                            
                            <Image source={MediaAssets.ic_notification} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#7a7e88', fontFamily: 'Comfortaa-Light', fontSize: 12 }}>
                                22 Artists Collaborating
                            </Text>
                            <Text style={{ color: '#7a7e88', fontFamily: 'Comfortaa-Light', fontSize: 12 }}>
                                5 Updates
                            </Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <Fragment>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => setSelectedTab(0)}>
                    <Text style={{ fontFamily: 'Comfortaa-Light', fontSize: 12, color: handleIsSelected(0) ? "#ced4e5"  : '#6c707d' , borderColor: handleIsSelected(0) ? '#576078':'#25272c', paddingVertical : 5, paddingHorizontal: 20, borderRadius: 18, borderWidth: 1 }}>
                        Ongoing
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(1)}>
                    <Text style={{ fontFamily: 'Comfortaa-Light', fontSize: 12, color: handleIsSelected(1) ? "#ced4e5"  : '#6c707d' , borderColor: handleIsSelected(1) ? '#576078':'#25272c',paddingVertical : 5, paddingHorizontal: 20, borderRadius: 18, borderWidth: 1 }}>
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab(2)}>
                    <Text style={{ fontFamily: 'Comfortaa-Light', fontSize: 12, color: handleIsSelected(2) ? "#ced4e5"  : '#6c707d' , borderColor: handleIsSelected(2) ? '#576078':'#25272c',  paddingVertical : 5, paddingHorizontal: 20, borderRadius: 18, borderWidth: 1 }}>
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <RenderCollaborations />
                <RenderCollaborations />
            </ScrollView>
        </Fragment>
    )
}

export default MyCollaborationsComponent