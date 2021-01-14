import React from 'react'
import {ScrollView, View, Text, TextInput, Dimensions, Touchable, TouchableOpacity} from 'react-native'

const Settings = ( props ) => {

    return (
        <ScrollView
            style={{
                width: Dimensions.get('window').width - 30,
                marginLeft: 15,
            }}
        >
            <Text
                style={{fontSize: 22, fontWeight: 'bold', marginBottom: 30}}
            >
                <TouchableOpacity onPress={props.back}><Text>↩</Text></TouchableOpacity> Settings
            </Text>

            <View>
                <Text>
                    Server Ip/Domain
                </Text>
                <TextInput 
                    placeholder="Server's Ip Address or Domain Name"
                    style={{
                        borderBottomWidth: 1.0,
                        marginTop: 25,
                        borderBottomColor: 'lightgrey',
                        width: Dimensions.get('window').width - 30,
                        height: 45
                    }}
                />
            </View>
            <View style={{marginTop: 30, flexDirection: 'row'}}>
                { props.username ?
                <TouchableOpacity 
                    style={{
                        width: (Dimensions.get('window').width - 30)/2-10,
                        backgroundColor: 'lightgrey',
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 3,
                    }}
                >
                    <Text
                        style={{
                            alignSelf: 'center',
                        }}
                    >Logout</Text>
                </TouchableOpacity>: null
                }
                <TouchableOpacity 
                    style={{
                        width: (Dimensions.get('window').width - 30)/2,
                        backgroundColor: 'lightgrey',
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 3,
                        marginLeft: 10
                    }}
                >
                    <Text
                        style={{
                            alignSelf: 'center',
                        }}
                    >Save Changes</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

export default Settings;