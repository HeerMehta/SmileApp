import React from 'react'
import { View, Text } from 'react-native'

export default function SingleQuote({ quote, bgColor, lineColor, fontColor }) {
  console.log(lineColor);
  console.log(bgColor);
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
            fontFamily: "Cursive",
            fontStyle: "italic"
            // adjustsFontSizeToFit: true
          }}>
          "{quote}"
        </Text>
      </View>
    </View>
  )
}


