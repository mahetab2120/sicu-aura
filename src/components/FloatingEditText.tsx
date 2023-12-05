import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { Colors } from "../res/styles/Colors";
import { ResponsivePixels } from "../res/styles/ResponsivePixels";

export interface IProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  imageEnd?:any
}

export const FloatingEditTextInput: React.FC<IProps> = React.forwardRef(
  (props, ref: any) => {
    const {
      value,
      label,
      onChangeText,
      imageEnd
    } = props;

    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.shadeGray}
          placeholder={label}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
        {imageEnd ?
          <Image source={imageEnd} style={styles.imageEndStyle}/>:<View/>
        }

      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputView:{
    height:ResponsivePixels.size50,
    backgroundColor:Colors.lightPrimaryColor,
    width:'90%',
    borderRadius:ResponsivePixels.size10,
    marginVertical:ResponsivePixels.size15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:ResponsivePixels.size20
  },
  textInput: {

    fontSize: ResponsivePixels.size14,
    color: Colors.defaultWhite,
  },
  imageEndStyle:{
    height:ResponsivePixels.size20,
    width:ResponsivePixels.size20,
  }
})
