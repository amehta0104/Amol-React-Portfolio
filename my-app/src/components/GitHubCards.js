import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../api/Github";
import RepoCard from "./RepoCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
class GitHubCards extends Component {
  state = {
    repos: []
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_API_KEY;
    const repos = [
      'CMST488-AdvancedJS',
      'Amol-React-Portfolio',
      'PapaRebuild',
      'CMST388',
      'AmolPortfolio',
      'CMST386',
    ];

    const repoData = await Promise.all(repos.map(async (repo) => {
      const url = baseURL(repo);
      const res = await Axios.get(url, {
        headers: {
          Authorization: `token ${api_key}`,
        },
      });
      return res.data;
    }));

    this.setState({
      repos: repoData
    });
  }

  render() {
    const { repos } = this.state;
    return (
      
        <div class="wrapper">
          <Container maxWidth="md" style={{ }}>
            <Grid container spacing={2} sx={{ }} >
              {repos.map((data, i) => (
                <RepoCard repo={data} key={i} />
              ))}
            </Grid>
          </Container>
        </div>
    
    );
  }
}

export default GitHubCards;
