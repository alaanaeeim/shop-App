import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { getPosts } from '../../Apis/services/UserService';
import { usePostsQuery } from '../../Queries/usePostsQuery';
import { PostsStore } from '../../Store/PostsStore';

const Posts = () => {
  const { paginated_data, fetchNextPages, loadingPosts, fetchingPosts } = usePostsQuery();

  const { posts, addPosts } = PostsStore();
  // addPosts([])

  const getAllPosts = async () => {
    const response = await getPosts();
    console.log("Response ============ > ", response)
    addPosts(response)
  }

  return (
    <View style={styles.container}>
      <Text>We Have - {posts?.length} - Post</Text>
      <Button title="Get Posts" onPress={getAllPosts} />

      <FlatList
        data={paginated_data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.containerPost}>
            <Text style={styles.title}>{index + 1} - </Text>
            <Text style={styles.title}>{item?.title}</Text>
          </View>
        )}
        ListFooterComponent={() => {
          return loadingPosts || fetchingPosts ? <ActivityIndicator /> : null
        }}
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