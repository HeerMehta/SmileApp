import React from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import Share from 'react-native-share';
import ViewShot, { captureRef } from 'react-native-view-shot';

import { img } from './ShareImage';
import { useRef } from 'react';

export default function SingleQuote({ quote, bgColor, lineColor, fontColor }) {
  const demoref = useRef();
  // const [src, setSrc] = useState(null);
  console.log(captureRef);

  const captureImage = () => {
    demoref.current.capture().then((e) => {
      console.log(e);
      const sharimg = "data:image/png;base64," + e;
      handleShare(sharimg);
    }).catch(e => console.log(e));
  }
  const text = "Click me to read a new quote"
  const handleShare = async (sharimg) => {
    const options = {
      message: "Hii",
      url: sharimg
    }
    try {
      await Share.open(options);
      console.log("SUCCESS")
    }
    catch {
      console.log("ERROR")
    }
  }
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