import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ResponsivePixels } from "../../../res/styles/ResponsivePixels";
import { Colors } from "../../../res/styles/Colors";
import Images from "../../../components/Images";
import { FloatingEditTextInput } from "../../../components/FloatingEditText";
import { navigationConstants } from "../../../constants/NavigationConstant";
import { isEmpty, setLoggedIn, showDangerToast } from "../../../utils/Utils";
import { HeaderView } from "../../../components/HeaderView";

const Login = (props:any) => {

  const [phoneNumber,setPhoneNumber]=useState('')
  const [password,setPassword]=useState('')

  const handlePhoneNumber=(text:any)=>{
    setPhoneNumber(text)
  }
  const handlePassword=(text:any)=>{
    setPassword(text)
  }

  const validateUser=async ()=>{
    if(isEmpty(phoneNumber)){
      showDangerToast('Enter Phone Number')
    }else if(isEmpty(password)){
      showDangerToast('Enter Password')
    }else{
      await setLoggedIn()
      props.navigation.navigate(navigationConstants.CONTACT_LIST)
    }
  }


  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderView/>
      <View style={styles.topView}>
        <Text style={styles.textSize20}>Login Page</Text>
        <Image source={Images.ic_login_head} style={styles.headerImage} />
        <View style={{alignSelf:'flex-start',marginHorizontal:ResponsivePixels.size20}}>
          <Text style={styles.textSize16}>Login</Text>
          <Text style={styles.textSize10}>Please Sign In your account</Text>
        </View>
        <FloatingEditTextInput label={'Email / Phone Number'} value={phoneNumber} onChangeText={handlePhoneNumber} imageEnd={Images.ic_email}/>
        <FloatingEditTextInput label={'Enter Password'} value={password} onChangeText={handlePassword} imageEnd={Images.ic_password}/>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={validateUser} style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={[styles.textSize16, { color: Colors.highlightNavyBlue }]}>Forgot Password</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  topView:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical:ResponsivePixels.size20
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImage:{
    width:ResponsivePixels.size227,
    height:ResponsivePixels.size227,
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginVertical:ResponsivePixels.size10
  },
  titleText:{
    fontSize:ResponsivePixels.size24,
    color:Colors.defaultWhite,
    fontWeight:'bold',
    marginHorizontal:ResponsivePixels.size5,
    letterSpacing:0.5,
    lineHeight:ResponsivePixels.size36
  },
  loginText:{
    fontSize:ResponsivePixels.size16,
    color:Colors.defaultBlack,
    fontWeight:'bold',
    marginHorizontal:ResponsivePixels.size5,
    letterSpacing:0.5,
    lineHeight:ResponsivePixels.size24
  },
  textSize20:{
    fontSize:ResponsivePixels.size20,
    color:Colors.defaultWhite,
    fontWeight:'bold',
    letterSpacing:0.5,
    lineHeight:ResponsivePixels.size30,
    marginBottom:ResponsivePixels.size20
  },
  textSize10:{
    fontSize:ResponsivePixels.size10,
    color:Colors.shadeGray,
    fontWeight:'bold',
    letterSpacing:0.5,
  },
  textSize16:{
    fontSize:ResponsivePixels.size14,
    color:Colors.defaultWhite,
    fontWeight:'bold',
    marginVertical:ResponsivePixels.size10,
    letterSpacing:0.5,
    lineHeight:ResponsivePixels.size21
  },
  loginButton:{
    height:ResponsivePixels.size50,
    width:ResponsivePixels.size300,
    borderRadius:ResponsivePixels.size44,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.highlightNavyBlue,
  }

});

export default Login;
