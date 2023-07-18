import React from 'react'
import { View, Text } from 'react-native'

export default function SingleQuote({ quote, bgColor, lineColor }) {
  console.log(lineColor);
  console.log(bgColor);
  return (
    <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: `${bgColor}`, height: 100 }}>
      <View style={{
        borderWidth: 5,
        borderColor: "white",
        width: "90%",
        height: "92%",
        paddingHorizontal: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}>
        <Text
          style={{
            color: `${lineColor}`,
            textAlign: "center",
            fontSize: 40
          }}>
          {quote}
        </Text>
      </View>
    </View>
  )
}


