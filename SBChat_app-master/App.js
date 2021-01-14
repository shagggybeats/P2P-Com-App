import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import Users from './components/Users'
import SignIn from './components/SignIn'
import Chat from './components/Chat'

import Settings from './components/Settings'

import io from "socket.io-client";

var socket;

const App = function () {

  const [server, setServer] = React.useState('http://192.168.10.11:3000')
  const [screen, setScreen] = React.useState('users');
  const [username, setUsername] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [messages, setMessages] = React.useState([])

  const addMessage = (data ) => {
    let _messages = messages;
    _messages.push(data)
    setMessages([ ... _messages])
  }

  React.useEffect(() => {
    socket = (io(server));

    if (socket) {

    }

    if (username) {
      fetch(server + '/users').then(async res => {
        let data = await res.json();
        setUsers(data)
      }).catch(err => {
        alert('Error while fetching users')
      })
      fetch(server + '/messages').then(async res=> {
        let data = await res.json();
        console.log(data)
        setMessages(data);
      })
    }

  }, [username, server])

  const signUp = ({name, username, pass}) => {
    socket.emit('join', {name, username, pass}, (err, res) => {
      if (err) {
        alert(err.msg)
      }
      else {
        setUsername(username)
      }
    });
  }

  const sendMessage = (data) => {
    socket.emit('new_message', data)
  }

  if (! username && screen !== 'settings') {
    return (
      <SignIn
       signUp={signUp}
       settings={() => setScreen('settings')}
      />
    )
  }

  return (
    <View style={{marginTop: 60}}>
      <View style = {{display: screen === 'settings' ? 'flex': 'none'}}>
        <Settings 
          back={() => setScreen('users')}
          logout={() => {}}
          username={username}
        />
      </View>
      <View 
        style = {{display: screen === 'chat' ? 'flex': 'none'}}
      >
        <Chat 
          user = {{username}}
          messages={messages}
          sendMessage={sendMessage}
          socket={socket}
        />
      </View>
      <ScrollView style = {{display: screen === 'users' ? 'flex': 'none'}}>
        <Users 
          users={users}
          chat={() => setScreen('chat')}
        />
        {users.length === 0 && (
          <Text
            style={{
              textAlign: 'center',
              fontStyle: 'italic',
              opacity: 0.6
            }}
          >
            No Users Online
          </Text>
        )}
      </ScrollView>
    </View>
  )
}

export default App;
