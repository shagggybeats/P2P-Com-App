import React from 'react'
import {Text, View} from 'react-native'

const User = function (props) {

    return (
        <View style= {{borderBottom: '1px solid #33333344', marginTop: 5}}>
            <Text style={{fontSize: 18, }}>
                {props.name}
            </Text>
            <Text>
                @{props.username}
            </Text>
        </View>
    )

}

export default User;