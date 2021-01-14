import React from 'react'
import {View, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native'
import SendIcon from '../res/send.png'

const Sender = function (props) {

    const [message, setMessage] = React.useState('')

    return (
        <View

        >
            <TextInput
                placeholder="Message"
                value={message}
                onChangeText={setMessage}
                style={{
                    padding: 10,
                    borderRadius: 20,
                    height: 40,
                    backgroundColor: 'white',
                    color: '#333',
                    width: Dimensions.get('window').width-90
                }}
            />
            <TouchableOpacity 
                style={{
                    marginLeft: Dimensions.get('window').width-75,
                    marginTop: -34,
                }}
                onPress={
                    () => {
                       props.sendMessage(message);
                       setMessage('') 
                    }
                }
            >
                <Image 
                    source={SendIcon}
                    style={{
                        maxHeight: 30,
                        maxWidth: 30,
                    }}
                />
            </TouchableOpacity>
        </View>
    )

}

export default Sender;