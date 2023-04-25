import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import Text from "../style/Text";

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      marginTop: 20,
      marginBottom: 10,
    },
    image: {
      width: 60,
      height: 60,
    },
    descriptionContainer: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 20,
    },
    description: {
      display: "flex",
      marginLeft: 20,
    },
    statContainer: {
      display: "flex",
      flexDirection: "row",
    },
    statItems: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 35,
    },
    statNumbers: {
      fontWeight: "bold",
    },
    name: {
      marginBottom: 5,
      fontWeight: "bold",
    },
    languageButton: {
      backgroundColor: "#0096FF",
    },
    buttonContainer: {
      marginTop: 5,
      marginBottom: 5,
    },
  });

  const getFormatNumber = (number) => {
    const roundedNumber = Math.round(number / 100) / 10;
    return `${roundedNumber.toString()}k`;
  };
  //console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <View>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.description}>
          <Text style={styles.name}> {item.fullName}</Text>
          <Text> {item.description}</Text>
          <Text style={styles.buttonContainer}>
            <Button
              style={styles.languageButton}
              title={`${item.language}`}
              onPress={() => console.log(item.language)}
            >
              {item.language}
            </Button>
          </Text>
        </View>
      </View>
      <View style={styles.statContainer}>
        <View style={styles.statItems}>
          <Text style={styles.statNumbers}>
            {getFormatNumber(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItems}>
          <Text style={styles.statNumbers}>
            {getFormatNumber(item.forksCount)}
          </Text>
          <Text>Forks</Text>
        </View>

        <View style={styles.statItems}>
          <Text style={styles.statNumbers}>
            {getFormatNumber(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItems}>
          <Text style={styles.statNumbers}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItems}>
          <Text style={styles.statNumbers}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
