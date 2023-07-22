import React, { useState } from "react";
import { ScrollView, RefreshControl, Text, View, StyleSheet, Dimensions, StatusBar, Button, } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
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
        padding: 10,
        backgroundColor: "#fff"
      }}>
        <Text style={styles.title}>Please Smile</Text>
      </View>
      <LinearGradient colors={['#fff',`${bgColor}`, `${lineColor}`]} style={styles.container}>
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
            <SingleQuote quote={quote} bgColor={bgColor} lineColor={lineColor} fontColor={"#836953"}/>
          </View>
        </View>
      </ScrollView>
      </LinearGradient>
      <View style={{
          height: 100,
          padding: 10,
          backgroundColor: `${lineColor}`,
          width: "100%",
        }}>

        </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 100,
    display: 'flex',
  },
  mainContainer: {
    width: "100%",
    height: Dimensions.get('window').height - 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteContainer: {
    height: Dimensions.get('window').height * 0.60,
    width: Dimensions.get('window').width * 0.80,
  },
  title: {
    fontSize: 25,
    color: '#836953',
    fontWeight: "400",
    textAlign: 'center'
  },
})

