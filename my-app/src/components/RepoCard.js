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
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    marginTop: "10px",
    marginBottom: "10px",
   
    justifyContent: "center",
    alignItems: "center",
   
  },
  card: {

    margin: "auto",
   minWidth: "100%",
    padding: "1em",
    transition: "0.3s",

    borderRadius: ".625rem!important",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    // background: "#233044",
    background: theme.palette.primary.black,
  },
  title: {
    "&:active": {
      color: "#00008E",
    },
  },
  cardContent: {
    minHeight: "120px",
    color: "#fff",
  },
  cardActions: {
    padding: "16px",
  },
  avatar: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
  dot: {
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    display: "inline-block",
  },
}));

const RepoCard = ({ repo }) => {
  const classes = useStyles();
  return (
   
      <Grid item xs={12} sm={6} lg={4} sx={{
        padding : 0 ,
        height: "100%",
      }} className={classes.root}>
   <Paper elevation={3} sx={{  padding: 0.225, backgroundColor: purple[500],}}>
       
            <Card className={classes.card}>
       
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
                    </CardActions>
       
                </Card>
     </Paper>
   
          </Grid>
   

  
  );
};

export default RepoCard;