import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import Card from "../components/Card";
import { Container, Grid, Button } from "@mui/material";
import axios from "axios";
import { ColorModeContext } from "../context/ThemeContext";
const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e0d6642c1f665f684f489" },
});
export default function Home() {
  const { theme, changeTheme } = useContext(ColorModeContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await instance.get("/");
        setPosts(res.data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        background: theme === "light" ? "white" : "#121212",
      }}
    >
      <Container>
        <Box sx={{ fontFamily: "Mulish" }}>
          <Box sx={{ marginTop: "60px" }}>
            <h1
              style={{
                fontSize: "50px",
                color: theme === "light" ? "#121212" : "white",
              }}
            >
              Blog posts
            </h1>
            <h5 style={{ color: "gray", fontSize: "20px" }}>
              Our latest updates and blogs about managing your team
            </h5>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {loading && <div>Loading ...</div>}
              {posts?.map((post) => (
                <Grid item xs={4}>
                  <Box sx={{ marginBottom: 1 }}>
                    <Card
                      header={post.text}
                      name={post.owner.firstName + " " + post.owner.lastName}
                      image={post.image}
                      mainText={post.text}
                      avatar={post.owner.picture}
                      date={post.publishDate.slice(0, 10)}
                      id={post.id}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "gray",
                  marginTop: "40px",
                  marginBottom: "150px",
                }}
              >
                Next {">"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
