import React, { Fragment } from "react"
import { View ,Text, Image} from "react-native"
import MediaAssets from "../../assets"
import CalendarComponent from "../calendar/Calendar"

const RenderCalendarCard = () => {
    return (
        <Fragment>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#101113', borderRadius: 24, marginVertical: 20, marginHorizontal: 10}} >

                <View style={{backgroundColor: '#191c22', paddingHorizontal: 10, paddingVertical: 20, height: '100%', width: '20%',justifyContent: 'flex-start', alignItems: 'center', borderBottomLeftRadius: 24, borderTopLeftRadius: 24}}>
                    <Text style={{fontSize: 18, fontFamily: 'Comfortaa-Light', color: '#a8aebc'}}>
                        10th Feb
                    </Text>
                </View>

                <View style={{marginLeft: 10}}>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 5}}>
                        <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={MediaAssets.profile_pic}/>
                        <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Comfortaa-Bold', marginLeft: 10}}>Mute the Saint</Text>
                    </View>

                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 5}}>
                        <Text style={{color: '#a8aebc', fontSize: 14, fontFamily: 'Comfortaa-Light'}}>Meeting Scheduled</Text>
                        <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Comfortaa-Bold', marginLeft: 10}}>9:30 AM - 10:30 AM</Text>
                    </View>

                    <View style={{marginVertical: 5}}>
                        <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Comfortaa-Bold', textDecorationLine: 'underline'}} >meet.google.com/jez-wnom-sct</Text>
                    </View>

                </View>
            </View>
        </Fragment>
    )
}

const MyCalendarComponent = () => {
    return (
        <Fragment>
            <CalendarComponent shouldOpen={true} />
            <View>
                <RenderCalendarCard />
            </View>
        </Fragment>
    )
}

export default  MyCalendarComponent