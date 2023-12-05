import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ResponsivePixels } from "../../../res/styles/ResponsivePixels";
import { Colors } from "../../../res/styles/Colors";
import Images from "../../../components/Images";
import { FloatingEditTextInput } from "../../../components/FloatingEditText";
import { navigationConstants } from "../../../constants/NavigationConstant";
import { isEmpty, setLoggedIn, showDangerToast } from "../../../utils/Utils";
import { HeaderView } from "../../../components/HeaderView";

const Registration = (props:any) => {

  const [username,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [imeiNumber1,setImeiNumber1]=useState('')
  const [imeiNumber2,setImeiNumber2]=useState('')
  const [imeiNumber3,setImeiNumber3]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [createPassword,setCreatePassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [referralCode,setReferralCode]=useState('')

  const handleUsername=(text:any)=>{
    setUserName(text)
  }
  const handleEmail=(text:any)=>{
    setEmail(text)
  }

  const handleImeiNumber1=(text:any)=>{
    setImeiNumber1(text)
  }
  const handleImeiNumber2=(text:any)=>{
    setImeiNumber2(text)
  }
  const handleImeiNumber3=(text:any)=>{
    setImeiNumber3(text)
  }
  const handleConfirmPassword=(text:any)=>{
    setConfirmPassword(text)
  }

  const handleReferralCode=(text:any)=>{
    setReferralCode(text)
  }

  const handlePhoneNumber=(text:any)=>{
    setPhoneNumber(text)
  }
  const handleCreatePassword=(text:any)=>{
    setCreatePassword(text)
  }

  const navigateToLogin=()=>{
    props.navigation.navigate(navigationConstants.LOGIN)
  }


  const validateUser=async ()=>{
    if(isEmpty(username)){
      showDangerToast('Enter Username')
    }else if(isEmpty(email)){
      showDangerToast('Enter Email')
    } else if(isEmpty(phoneNumber)){
      showDangerToast('Enter Phone Number')
    }else if(isEmpty(imeiNumber1)){
      showDangerToast('Enter IMEI Number 1')
    }else if(isEmpty(createPassword)){
      showDangerToast('Enter Password')
    }else if(isEmpty(confirmPassword)){
      showDangerToast('Enter Confirm Password')
    }else if(createPassword !== confirmPassword){
      showDangerToast('Password Not Match')
    }else{
      await setLoggedIn()
      props.navigation.navigate(navigationConstants.CONTACT_LIST)
    }
  }


  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderView/>
      <View style={styles.topView}>
        <Text style={styles.textSize20}>Registration Page</Text>
        <Image source={Images.ic_registration_head} style={styles.headerImage} />
        <View style={{alignSelf:'flex-start',marginHorizontal:ResponsivePixels.size20}}>
          <Text style={styles.textSize16}>Create Account</Text>
          <Text style={styles.textSize10}>Please fill the input below here</Text>
        </View>

      </View>
      <ScrollView contentContainerStyle={styles.bottomView}>

        <FloatingEditTextInput label={'User Name'} value={username} onChangeText={handleUsername} imageEnd={Images.ic_username}/>
        <FloatingEditTextInput label={'Email'} value={email} onChangeText={handleEmail} imageEnd={Images.ic_email}/>
        <FloatingEditTextInput label={'Phone Number'} value={phoneNumber} onChangeText={handlePhoneNumber} imageEnd={Images.ic_phone}/>
        <FloatingEditTextInput label={'IMEI Number 1 *'} value={imeiNumber1} onChangeText={handleImeiNumber1} imageEnd={Images.ic_imei}/>
        <FloatingEditTextInput label={'IMEI Number 2'} value={imeiNumber2} onChangeText={handleImeiNumber2} imageEnd={Images.ic_imei}/>
        <FloatingEditTextInput label={'IMEI Number 3 (Optional)'} value={imeiNumber3} onChangeText={handleImeiNumber3} imageEnd={Images.ic_imei}/>
        <FloatingEditTextInput label={'Create Password'} value={createPassword} onChangeText={handleCreatePassword} imageEnd={Images.ic_password}/>
        <FloatingEditTextInput label={'Re-Enter Password'} value={confirmPassword} onChangeText={handleConfirmPassword} imageEnd={Images.ic_password}/>
        <FloatingEditTextInput label={'Referral Code (Optional)'} value={referralCode} onChangeText={handleReferralCode} />
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={validateUser} style={styles.loginButton}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.rowView}>
          <Text style={[styles.textSize16]}>already have an account?</Text>
          <Text onPress={navigateToLogin} style={[styles.textSize16, { color: Colors.highlightNavyBlue,marginHorizontal:ResponsivePixels.size2 }]}>Sign In</Text>
        </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent:'center',
  },
  topView:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical:ResponsivePixels.size20
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImage:{
    width:ResponsivePixels.size270,
    height:ResponsivePixels.size188,

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
    color:Colors.shadeGray,
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

export default Registration;
