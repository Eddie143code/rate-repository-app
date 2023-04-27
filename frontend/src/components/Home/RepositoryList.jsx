import { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
const styles = StyleSheet.create({
  separator: {
    marginTop: 30,
    height: 10,
    backgroundColor: "grey",
    opacity: 0.5,
  },
  container: {
    borderWidth: 2,
    borderColor: "black",
  },
});

const ItemSeparator = ({ data }) => {
  return <View style={styles.separator} />;
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      // other props
    />
  );
};

export default RepositoryList;
