import { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../../graphql/queries";
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
  const list = useQuery(GET_REPOSITORIES);
  //console.log(list.data);

  // Get the nodes from the edges array
  const repositoryNodes = list.data
    ? list.data.repositories.edges.map((edge) => edge.node)
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
