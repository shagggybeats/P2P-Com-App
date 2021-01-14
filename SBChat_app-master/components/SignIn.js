import React, {useState} from 'react'
import {Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native'

const SignIn = function (props) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('')

    const signUp = () => {
        
        props.signUp({
            name,
            username,
            pass
        });

    }

    return (
        <View style={{marginLeft: 15, marginTop: 50, marginRight: 15}}>
            <TouchableOpacity 
                onPress = {props.settings}
            >
            <Text
                style={{
                    fontSize: 22,
                    alignSelf: 'flex-end'
                }}
            >
                ⚙
            </Text>
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                Join Us
            </Text>
            <TextInput 
                onChangeText={setName}
                value={name}
                placeholder="Name"
                label={'Name'}
                style={{
                    borderBottomWidth: 1.0,
                    borderBottomColor: 'lightgrey',
                    marginTop: 25,
                    width: Dimensions.get('window').width - 30,
                    height: 45
                }}
            />
            <TextInput 
                onChangeText={setUsername}
                value={username}
                autoCapitalize = 'none'
                placeholder="Username"
                label={'Username'}
                style={{
                    borderBottomWidth: 1.0,
                    marginTop: 25,
                    borderBottomColor: 'lightgrey',
                    width: Dimensions.get('window').width - 30,
                    height: 45
                }}
            />
            <TextInput 
                onChangeText={setPass}
                value={pass}
                placeholder="Password"
                label={'Password'}
                style={{
                    borderBottomWidth: 1.0,
                    marginTop: 25,
                    borderBottomColor: 'lightgrey',
                    width: Dimensions.get('window').width - 30,
                    height: 45
                }}
                secureTextEntry
            />
            <Text>
                {
                    this.message
                }
            </Text>
            <TouchableOpacity
                style={{
                    width: 100,
                    marginLeft: (Dimensions.get('window').width - 65)/2,
                    marginTop: 50,
                    backgroundColor: ''
                }}
                onPress = {signUp}
                title='Sign Up'
            >
                <Text style={{fontSize: 18}}>
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    )

}

export default SignIn;