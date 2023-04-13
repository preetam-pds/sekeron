import * as React from 'react';
import { Grid } from "@mui/material";
import styles from "./Posts.module.css";

interface Props {
  post: {
    src: string;
    admirations: string;
    comments: string;
  };
}

const Posts = ({ post }: Props) => {
  return (
    <Grid item xs={12} md={4} padding={1.5}>
      <div className={styles["post-container"]}>
        <img src={post.src} alt="" width={"100%"} />
        <div className={styles["post-description"]}>
          <span>{post.admirations} Admirations</span>
          <span>{post.comments} Comments</span>
        </div>
      </div>
    </Grid>
  );
};

export default Posts;
