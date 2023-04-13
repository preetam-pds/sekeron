import React from "react"
import { Text } from "react-native"
import HeaderWithBackButton from "../../common-components/header-with-back-button/HeaderWithBackButton"

const MyProjectDetailsComponent = (props) => {
    return (
        <>
        <HeaderWithBackButton />
        <Text style={{color: '#fff'}}>MYPROJECT DATA</Text>
        </>
    )
}

export default MyProjectDetailsComponent