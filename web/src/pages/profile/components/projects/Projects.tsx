import * as React from "react";
import { Grid, Stack } from "@mui/material";
import ImageAssets from "../../../../assets";
import styles from "./Projects.module.css";

interface Props {
  project: {
    src: string;
    projectName: string;
    projectMember: string;
  };
}

const Projects = ({ project }: Props) => {
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={4}
      lg={3}
      padding={1.5}
      mt={2}
      maxWidth={"254px"}
    >
      <img className={styles["project-image"]} src={project.src} alt="" />
      <Stack spacing={1} mt={1} ml={{ xs: 1, md: 2 }} direction="column">
        <p className={styles["project-name"]}>{project.projectName}</p>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <img
            src={ImageAssets.ic_avatar}
            alt=""
            className={styles["project-avatar"]}
          />
          <span className={styles['project-member-name']}>{project.projectMember}</span>
          <span className={styles['follow-text']}>Follow</span>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Projects;
