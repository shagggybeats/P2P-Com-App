import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import User from './User'

const Users = function (props) {
  return (
    <>
      <Text
        style={{
          marginLeft: 15,
          fontSize: 22,
        }}
      >
        Users
      </Text>
      <Text
        style={{
          marginLeft: 15,
        }}
      >
        These online users can send messages to the group
      </Text>
      <TouchableOpacity
      style={{marginTop: 15, marginBottom: 15, marginLeft: 15}}
        onPress = {props.chat}
      >
        <Text>Go to Chat</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        {props.users.map((user) => {
          return <User name={user.name} username={user.username} />;
        })}
      </View>
    </>
  );
};

export default Users;
