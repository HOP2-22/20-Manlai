import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { ColorModeContext } from "../context/ThemeContext";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import List from "../components/List";
import RemoveIcon from "@mui/icons-material/Remove";

export default function MoreDetail() {
  const { theme, changeTheme } = useContext(ColorModeContext);
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [commentValue, setCommentValue] = useState("");
  const instance = axios.create({
    baseURL: `https://dummyapi.io/data/v1/post/${id}`,
    headers: { "app-id": "636e0d6642c1f665f684f489" },
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await instance.get("/");
        console.log(res);
        setPost(res.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  console.log(post);
  return (
    <Box sx={{ background: theme === "light" ? "white" : "#121212" }}>
      <Container>
        <Box>
          <Box sx={{ marginTop: "60px" }}>
            <img src={post?.image} alt="" />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ color: theme === "light" ? "gray" : "#fff" }}>
              {post?.text}
            </h1>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar src={post?.owner.picture} />
            <Typography
              sx={{
                color: theme === "light" ? "gray" : "#fff",
              }}
            >
              written by
              <div
                style={{
                  color: theme === "light" ? "gray" : "#fff",
                  fontWeight: "900",
                }}
              >
                {post?.owner.firstName + " " + post?.owner.lastName}
              </div>
            </Typography>
          </Box>
        </Box>
        <Box>
          {list.map((el, index) => {
            return (
              <Box sx={{ display: "flex" }}>
                <List value={el} key={index} />
                <Button
                  onClick={() => {
                    const changed = list.filter((value, ind) => ind !== index);
                    setList(changed);
                  }}
                >
                  <RemoveIcon />
                </Button>
              </Box>
            );
          })}
        </Box>
        <input
          placeholder="Add comment"
          value={commentValue}
          onChange={(e) => {
            setCommentValue(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setList([...list, commentValue]);
          }}
        >
          Add
        </Button>
      </Container>
    </Box>
  );
}
