import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import PostGen from "./Generator/index";
import Post from "../../components/Posts/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/actions/index";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <PostGen />
      {posts &&
        posts.map((post) => (
          <Post
            global={post}
            key={post.id}
            id={post.id}
            avatar={post.avatar}
            image={post.image}
            body={post.body}
            username={post.author}
            timestamp={post.timestamp}
            comments={post.comments}
          />
        ))}
    </Grid>
  );
}
