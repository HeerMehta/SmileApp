import React, { useState, useRef } from "react";
import { ScrollView, RefreshControl, Text, View, StyleSheet, Dimensions, StatusBar, Button, TouchableOpacity, } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Octicons';
import Share from 'react-native-share';
import ViewShot, { captureRef } from 'react-native-view-shot';

import { QuoteList } from "./QuoteList";
import SingleQuote from "./SingleQuote";


export default function Quote() {
  const bgColors = ["#C2E2F0", "#F0C2EE", "#DFF0C2", "#FDE9A4", "#CBFDA4", "#FDC9A4"];
  const lineColors = ["#F0C2C2", "#F0DEC2", "#ECC2F0", "#C3C2F0", "#C2EDF0", "#F0C2EB"];
  const fontColors = ["#6C6AB9", "#74B26A", "#B2916A", "#B26A91", "#CD7ABF", "#6B88AA"];
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [quote, setQuote] = useState(QuoteList[0].quote);
  const [bgColor, setBgColor] = useState(bgColors[0]);
  const [lineColor, setLineColor] = useState(lineColors[0]);
  const [fontColor, setFontColor] = useState(fontColors[0]);

  const demoref = useRef();
  // const [src, setSrc] = useState(null);
  console.log(captureRef);

  const captureImageAndShare = () => {
    demoref.current.capture().then((img) => {
      const sharimg = "data:image/png;base64," + img;
      handleShare(sharimg);
    }).catch(err => console.log(err));
  }
  const handleShare = async (sharimg) => {
    const options = {
      message: "Hey, let's Smile together with YourSmile quotes !!! Download YourSmile app now...",
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

  const onRefresh = () => {
    console.log("first")
    setIsRefreshing(true);
    const randomNumber = Math.floor(Math.random() * 60);
    const randomNumber2 = Math.floor(Math.random() * bgColors.length);
    console.log(randomNumber2, "number");
    setTimeout(() => {
      setBgColor(bgColors[randomNumber2]);
      setLineColor(lineColors[randomNumber2]);
      setFontColor(fontColors[randomNumber2]);
      setQuote(QuoteList[randomNumber].quote);
    }, 1000)

    setIsRefreshing(false);
  };
  return (
    <View>
      <StatusBar backgroundColor="#fff" />
      <View style={{
        height: 50,
        paddingTop: 5,
        backgroundColor: "#fff",
        width: '100%',
        display: 'flex',
        paddingHorizontal: 5,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
      }}>
        <View>
        <Icon name="smiley" size={40} style={{
          color: `${fontColor}`,
          backgroundColor: "#fff",
          borderRadius: 20
        }} />
        </View>
        <Text style={[styles.title, { color: `${fontColor}` }]}>YourSmile</Text>
        <TouchableOpacity style={styles.shareButton} onPress={captureImageAndShare}>
          <Icon name="share-android" size={30} style={{ color: `${fontColor}`}} />
        </TouchableOpacity>
      </View>
      <ViewShot ref={demoref} options={{ format: "jpg", quality: 0.9, result: "base64" }}>
        <LinearGradient colors={['#fff', `${bgColor}`, `${lineColor}`]} style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                tintColor="#222"
                title="Pull to refresh"
              />
            }
          >
            <View style={styles.mainContainer}>
              <View style={styles.quoteContainer} elevation={7}>
                <SingleQuote quote={quote} bgColor={bgColor} lineColor={lineColor} fontColor={"#836953"} />
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </ViewShot>

      <View style={{
        height: 100,
        padding: 10,
        backgroundColor: `${lineColor}`,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity onPress={onRefresh} style={[styles.refreshButton, { backgroundColor: `${fontColor}` }]} elevation={20}>
          <Text style={styles.refreshButtonText}>Pull refresh or Click me to get more smiles</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 150,
    display: 'flex',
  },
  mainContainer: {
    width: "100%",
    height: Dimensions.get('window').height - 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteContainer: {
    height: Dimensions.get('window').height * 0.60,
    width: Dimensions.get('window').width * 0.80,
  },
  title: {
    width: Dimensions.get('window').width * 0.50,
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Caveat-Medium',
  },
  shareButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    },
  refreshButton: {
    width: Dimensions.get('window').width * 0.8,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'relative',
    bottom: 50
  },
  refreshButtonText: {
    textAlign: 'center',
    fontSize: 27,
    color: "#fff",
    fontFamily: 'Caveat-Regular'
  }
})

