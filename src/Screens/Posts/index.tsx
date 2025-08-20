import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { getPaginatedPosts, getPosts } from '../../Apis/services/UserService';
import { usePostsQuery } from '../../Queries/usePostsQuery';

const Posts = () => {
  const { paginated_data, fetchNextPages, posts} = usePostsQuery();

  return (
    <View style={styles.container}>
      <Button title="Get Posts" onPress={getPosts} />
      {/* <Button title="Paginated Posts" onPress={() => getPaginatedPosts({page: 2})} /> */}

      <FlatList
        data={paginated_data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.containerPost}>
            <Text style={styles.title}>{index + 1} - </Text>
            <Text style={styles.title}>{item?.title}</Text>
          </View>
        )}
        onEndReached={fetchNextPages}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 120
  },
  containerPost: {
    flexDirection: 'row',
    backgroundColor: '#730673',
    padding: 8,
    borderRadius: 8,
    marginTop: 12
  },
  title: {
    fontSize: 13,
    fontWeight: 700,
    color: '#FFFFFF'
  }
})