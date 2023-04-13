import React, {ReactNode, useState} from 'react';
import {Text, Modal, View,Image, TouchableOpacity} from 'react-native';
import MediaAssets from '../../assets';
import styles from './Stepper.Style';


interface IConfirmationDialogProps {
  isDetailsCompleted: boolean;
  isSetPasswordCompleted: boolean;
  setIsDetailsCompleted: any;
  setPasswordCompleted:any;
  setIsProfileCreated:any
  isProfileCreated:boolean;
  setIsPassword:any
  setIsDetails:any
  setIsProfile:any
  isDetails:boolean
  isSetPassword:boolean
  isProfile:boolean
}
const Stepper = (props: IConfirmationDialogProps) => {

 return (
   <View style={styles.container}>
     <View style={styles.secondaryContainer}>
       {!props.isDetails ? (
         <Image
           source={MediaAssets.ic_steppertickmark}
           style={styles.completedStepperTickMark}
         />
       ) : (
         <View style={styles.pendingStepperLine}></View>
       )}
       <View
         style={[
           styles.pendingStepper,
           props.isDetails
             ? styles.pendingStepperBorder
             : styles.completedStepperBorder,
         ]}
       />
       {props.isDetails ? <View style={styles.completedStepper}></View> : null}
       {!props.isDetails && !props.isSetPasswordCompleted ? (
         <View style={styles.inProgressStepper}></View>
       ) : null}
       {props.isSetPasswordCompleted ? (
         <Image
           source={MediaAssets.ic_steppertickmark}
           style={styles.completedStepperTickMark}
         />
       ) : null}

       <View
         style={[
           styles.pendingStepper,
           !props.isSetPasswordCompleted
             ? styles.pendingStepperBorder
             : styles.completedStepperBorder,
         ]}
       />
       {!props.isSetPasswordCompleted ? (
         <View style={styles.completedStepper}></View>
       ) : null}
       {props.isSetPasswordCompleted ? (
         <View style={styles.pendingStepperLine}></View>
       ) : null}
     </View>
   </View>
 );
};
export default Stepper;