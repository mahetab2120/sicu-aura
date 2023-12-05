import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { ResponsivePixels } from "../../res/styles/ResponsivePixels";
import { Colors } from "../../res/styles/Colors";
import Images from "../../components/Images";
import { navigationConstants } from "../../constants/NavigationConstant";
import { checkIfLoggedIn } from "../../utils/Utils";
import { HeaderView } from "../../components/HeaderView";

const Splash = (props:any) => {
    useEffect(()=>{
        validateUser()
    },[])

    const navigateToNextScreen=(screenName:any)=>{
        setTimeout(()=>{
            props.navigation.navigate(screenName)
        },1000)
    }

    const validateUser=async ()=>{
        let isLoggedIn = await checkIfLoggedIn();
        if(isLoggedIn){
            navigateToNextScreen(navigationConstants.CONTACT_LIST)
        }else{
            navigateToNextScreen(navigationConstants.INTRODUCTION)
        }
    }


    return (
        <SafeAreaView style={styles.mainContainer}>
            <HeaderView/>
            <Image source={Images.ic_app_logo} style={styles.appLogoImage} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:Colors.primaryColor,
        justifyContent:'center',
        alignItems:'center'
    },
    appLogoImage:{
        width:ResponsivePixels.size180,
        height:ResponsivePixels.size280,
    }
});

export default Splash;
