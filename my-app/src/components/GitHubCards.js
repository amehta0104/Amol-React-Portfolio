// import React, { Component } from "react";
// import Axios from "axios";
// import baseURL from "../api/Github";
// import RepoCard from "./RepoCard";
// import { Grid } from "@mui/material";
// import { Container } from "@mui/material";
// import { Box } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Paper } from "@mui/material";
// import { Button } from "@mui/material";
// import { ButtonGroup } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import {useStyles} from "../pages/theme";

// class GitHubCards extends Component {
//   state = {
//     repos: []
//   };

//   async componentDidMount() {
    
//     const api_key = process.env.REACT_APP_GITHUB_API_KEY;
//     const url = 'https://api.github.com/user/repos?type=all&sort=updated';
//     const repoData = await Axios.get(url, {
//       headers: {
//         Authorization: `token ${api_key}`,
//       }
//     });
//     this.setState({
//       repos: repoData.data
//     });
//   }

//   render() {
//     const { repos } = this.state;
//     const isHomePage = window.location.pathname === "/";
//     const displayedRepos = isHomePage ? repos.slice(0, 6) : repos;
    
//     return (
//       <div class="wrapper">
//         <Container
//           maxWidth="lg"
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             padding: 2,
//             alignItems: "center",
//           }}
//         >
//           <Grid
//             container
//             spacing={2}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Grid item xs={12} sm={12} md={12}>
//               <Typography variant="h3" paragraph gutterBottom>
//                 GitHub Projects
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={12} md={12} >
//                          <Typography variant="subtitle1"  paragraph  gutterBottom>
//                           All the projects I have done for fun and for learning. Click on the project to see the Github Repository.

//                         </Typography>
//                           </Grid>
//             {displayedRepos.map((data, i) => (
//               <RepoCard repo={data} key={i} />
//             ))}
//             <Grid item xs={12} sx={{}}>
//             <Button
//   variant="text"
//   href="/projectpage"
//   target="_blank"
//   rel="noopener noreferrer"
//   style={{color: '#9A27AE',  display: displayedRepos.length < 7 ? "block" : "none" }}
// >
//   View All
// </Button>

//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     );
//   }
// }

// export default GitHubCards;

import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../api/Github";
import RepoCard from "./RepoCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useStyles } from "../pages/theme";

class GitHubCards extends Component {
  state = {
    repos: [],
    currentIndex: 0,
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_GITHUB_API_KEY;
    const url = "https://api.github.com/user/repos?type=all&sort=updated";
    const repoData = await Axios.get(url, {
      headers: {
        Authorization: `token ${api_key}`,
      },
    });
    this.setState({
      repos: repoData.data,
    });
  }

  handlePrev = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  handleNext = () => {
    const { currentIndex, repos } = this.state;
    if (currentIndex < repos.length - 3) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  render() {
    const { repos, currentIndex } = this.state;
    const isHomePage = window.location.pathname === "/";
    const displayedRepos = isHomePage ? repos.slice(currentIndex, currentIndex + 3) : repos;

    return (
      <div class="wrapper">
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflowX: "hidden",
              position: "relative",
            }}
          >
                 <Grid item xs={12} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}>
              <Typography variant="h3" paragraph gutterBottom>
                GitHub Projects
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              
            }}>
              {currentIndex > 0 && (
                <Button onClick={this.handlePrev} variant="text">
                  {"<- Prev"}
                </Button>
              )}
            </Grid>
       

            <Grid item xs={6} sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",

            }}>
              {currentIndex < repos.length - 3 && (
                <Button onClick={this.handleNext} variant="text">
                  {"Next ->"}
                </Button>
              )}
            </Grid>

            {displayedRepos.map((data, i) => (
             
                <RepoCard repo={data} key={i} />
              
            ))}

      
          </Grid>
        </Container>
      </div>
    );
  }
}

export default GitHubCards;
