import PostsGrid from '../posts/posts-grid.js';

import classes from './recent-posts.module.css';

function RecentPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Recent Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default RecentPosts;
