import React from 'react'
import {Text, View} from 'react-native'

const User = function (props) {

    return (
        <View style={{borderBottomRightRadius: 1, marginTop: 10, borderBottomColor: 'grey', marginTop: 5, paddingLeft: 15}}>
            <Text style={{fontSize: 18}}>
                {props.name}
            </Text>
            <Text>
                @{props.username}
            </Text>
        </View>
    )

}

export default User;