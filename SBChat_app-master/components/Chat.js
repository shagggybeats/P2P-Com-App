import React from 'react'
import {Text, View, TextInput, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import Sender from './Sender'
import Bubble from './Bubble'

function Chat (props) {
    console.log(props.messages)
    const {username} = props.user;
    const scrollViewRef = React.useRef();
    const [messages, setMessages] = React.useState([]);

    const newMessage = (content, from=username) => {
        props.sendMessage({from, content})
    }

    const addMessage = (content, from) => {
        let _messages = messages;
        _messages.push({content, from});
        setMessages([... _messages]);
    }

    React.useEffect(() => {
        props.socket.removeEventListener();
        props.socket.on('new_message', (data) => {
            addMessage(data.content, data.from)
        })
    })

    return (
    <View style={{marginLeft: 15, }}>
        <View style={{height: 60}}>
            <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Group Chat
            </Text>
            <Text>
                @{username}
            </Text>
            <TouchableOpacity
                style={{
                    float: 'right'
                }}
                onClick={props.backScreen}
            >
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
            </View>
        </View>
        <ScrollView 
            style={{height: (Dimensions.get('window').height - 180)}}
            ref={scrollViewRef}
            onContentSizeChange={true ? () => scrollViewRef.current.scrollToEnd({ animated: true }): null}      
        >
            {
                messages.map((msg, index) =>  {
                    return (
                    <Bubble 
                        content = {msg.content}
                        from={msg.from}
                        isMe = {msg.from === username}
                        key={index}
                    />
                )})
            }
        </ScrollView>
        <View style={{padding: 15, paddingTop: 10, paddingBottom: 5, height: 100, backgroundColor: '#333333aa', marginLeft: -15}}>
            <Sender 
                sendMessage={newMessage}
            />
        </View>
    </View>)

}

export default Chat;

