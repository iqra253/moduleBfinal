import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { containerFull, goback, hr80,logo1 } from '../../../CommonCss/pagecss'
import logo from '../../../../assets/logo.png'
import { formbtn, formHead, formHead2, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/formcss'
import { MaterialIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

const Signup_EnterEmail = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>
      <AntDesign name="back" size={28} color="gray" />
<Text style={{
    color: 'gray',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold'
}}

>Go Back</Text>
</TouchableOpacity>
<Image source={logo} style={logo1} />
<Text style={formHead2}>Create a new account</Text>
<TextInput placeholder="Enter Your Email" style={formInput}
onChangeText={(text) => {
    setEmail(text)
  }}
     />
<Text style={formbtn}
      onPress={() => navigation.navigate('Signup_EnterVerificationCode')}> Next
</Text>
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})