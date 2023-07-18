import React, { useState } from "react";
import { ScrollView, RefreshControl, Text, View, StyleSheet, Dimensions, } from "react-native";
import { QuoteList } from "./QuoteList";
import SingleQuote from "./SingleQuote";

export default function Quote() {
  const bgColors = ["#F0C2C2", "#C2E2F0", "#D6C2F0", "#F0C2E8", "#CBF0C2"];
  const lineColors = ["#E41D1D", "#1D31E4", "#8D1DE4", "#E41DD0", "#1EB024"];
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [quote, setQuote] = useState(QuoteList[0].quote);
  const [bgColor, setBgColor] = useState(bgColors[0]);
  const [lineColor, setLineColor] = useState(lineColors[0]);



  const onRefresh = () => {
    console.log("first")
    setIsRefreshing(true);
    const randomNumber = Math.floor(Math.random() * 60);
    const randomNumber2 = Math.floor(Math.random() * 6);
    console.log(randomNumber2);
    setTimeout(() => {
      setBgColor(bgColors[randomNumber2]);
      setLineColor(lineColors[randomNumber2]);
      setQuote(QuoteList[randomNumber].quote);
    }, 1000)

    setIsRefreshing(false);
  };
  return (
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
      <View style={styles.quoteContainer} elevation={7}>
        <SingleQuote quote={quote} bgColor={bgColor} lineColor={lineColor} />
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 1,
    display: 'flex',
    padding: 20,
  },
  quoteContainer: {
    height: Dimensions.get('window').height * 0.60,
    width: Dimensions.get('window').width * 0.80,
  }
})
