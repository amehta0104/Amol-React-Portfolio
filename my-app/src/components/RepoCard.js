import React from "react";

import theme from "../pages/theme";
import {
  Button,
  ButtonGroup,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Grid,
  Badge,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import {useStyles } from "../pages/theme";

const RepoCard = ({ repo , i}) => {
  const classes = useStyles();
  return (
   
      <Grid item xs={12} sm={6} lg={4} sx={{
        padding : 0 ,
        height: "100%",
      }} className={classes.root}>
   <Paper className={classes.paper} elevation={3} sx={{  padding: 0.225, }}>
       
            <Card className={classes.card} sx={{
              width: "100%",
            }}>
       
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <span
                        className="octicon octicon-repo"
                        style={{ fontSize: "15px" }}
                      ></span>
                    </Avatar>
                  }
                  title={
                    <Typography variant="h6">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.title}
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        {repo.name}
                      </a>{" "}
                    </Typography>
                  }
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="body1">{repo.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  {/* {repo.language ? (
                    <React.Fragment>
                      <span
                        className={classes.dot}
                        style={{ backgroundColor: language[repo.language]["color"] }}
                      ></span>
                      <Typography style={{ marginRight: "10px" }}>
                        {repo.language}
                      </Typography>
                    </React.Fragment>
                  ) : null} */}
                  {repo.stargazers_count >= 0 ? (
                    <React.Fragment>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          marginRight: "10px",
                          color: "#fff",
                        }}
                      >
                        <span className="octicon octicon-star">
                          {" "}
                          {repo.stargazers_count}
                        </span>
                      </a>
                    </React.Fragment>
                  ) : null}
                  {repo.forks_count >= 0 ? (
                    <React.Fragment>
                      <a
                            href={`${repo.html_url}/fork`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: "none",
                              marginRight: "10px",
                              color: "#551A8B",
                            }}
                          >
                            <span className="octicon octicon-repo-forked">
                             Fork {repo.forks_count}
                            </span>
                          </a>
                        </React.Fragment>
                      ) : null}
                   <Badge badgeContent={repo.language} color="secondary" style={{marginLeft: "auto",}} />

                    </CardActions>
       
                </Card>
     </Paper>
   
          </Grid>
   

  
  );
};

export default RepoCard;