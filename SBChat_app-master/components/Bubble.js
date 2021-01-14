import React from 'react'
import {Dimensions, Text, View, TouchableOpacity} from 'react-native'

const Bubble = function (props) {

    const {
        content,
        isMe
    } = props;

    return (
            <View
                style={{
                    borderRadius: 10,
                    backgroundColor: isMe ? 'lightgrey': '#dbd76a',
                    borderRadius: 3,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 30,
                }}
            >
            <Text
                style={{
                    backgroundColor: isMe ? 'lightgrey': '#dbd76a',
                    color: '#333',
                    padding: 3,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 3,
                    textAlign: isMe? 'right': 'left',
                    width: Dimensions.get('window').width - 30,
                    borderRadius: 10,
                    marginBottom: 10,
                }}
            >{props.from} {"\n"} {content}</Text>
            </View>
    )

}

export default Bubble;