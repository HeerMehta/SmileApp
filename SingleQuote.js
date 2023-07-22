import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import ReactCurvedText from "react-curved-text";
import Share from 'react-native-share';

export default function SingleQuote({ quote, bgColor, lineColor, fontColor }) {
  console.log(lineColor);
  console.log(bgColor);
  const text = "Click me to read a new quote"
  return (
    <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
      <View style={{
        borderWidth: 5,
        borderColor: `${fontColor}`,
        width: "90%",
        height: "92%",
        paddingHorizontal: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}>
        <Text
          style={{
            color: `${fontColor}`,
            textAlign: "center",
            fontSize: 40,
            fontFamily: "Caveat-Bold",
          }}>
          "{quote}"

        </Text>
        <Icon name="smiley" size={80} style={{
          position: 'absolute',
          top: -40,
          color: `${fontColor}`,
          backgroundColor: "#fff",
          borderRadius: 40
        }} />
      </View>
    </View>
  )
}