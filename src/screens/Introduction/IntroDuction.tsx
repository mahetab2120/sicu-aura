import React, { useEffect, useRef } from "react";
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ResponsivePixels } from "../../res/styles/ResponsivePixels";
import { Colors } from "../../res/styles/Colors";
import Images from "../../components/Images";
import { navigationConstants } from "../../constants/NavigationConstant";
import { HeaderView } from "../../components/HeaderView";

const Introduction = (props:any) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: -50, // Change this value to adjust how much the image moves up
      duration: 1000, // Adjust the duration of the animation
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const navigateToNextScreen=(screenName:any)=>{
    props.navigation.navigate(screenName)
  }

  const handleLogin=()=>{
    navigateToNextScreen(navigationConstants.LOGIN)
  }

  const handleRegistration=()=>{
    navigateToNextScreen(navigationConstants.REGISTRATION)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderView/>
      <View style={styles.topView}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <Image source={Images.ic_app_logo} style={styles.appLogoImage} />
        </Animated.View>
        <View style={styles.rowView}>
          <Text style={styles.titleText}>Feel</Text>
          <Text style={[styles.titleText, { color: Colors.highlightGreen }]}>Safe</Text>
          <Text style={styles.titleText}>Everywhere</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.subTitleText}>#Safe-</Text>
          <Text style={[styles.subTitleText, { color: Colors.highlightGreen }]}>T</Text>
          <Text style={styles.subTitleText}>-Fast</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.rowView}>
          <Text style={styles.defaultText}>New User ? </Text>
          <Text onPress={handleRegistration} style={[styles.defaultText, { color: Colors.highlightNavyBlue }]}>Register Now</Text>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  appLogoImage:{
    width:ResponsivePixels.size180,
    height:ResponsivePixels.size280,
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
  subTitleText:{
    fontSize:ResponsivePixels.size20,
    color:Colors.defaultWhite,
    fontWeight:'bold',
    letterSpacing:0.5,
    lineHeight:ResponsivePixels.size30
  },
  defaultText:{
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

export default Introduction;
