import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InputUnstyled from "@mui/base/InputUnstyled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "350px",
        backgroundColor: "#252B3B",
        color: "white",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              fontStyle: "Bold",
              fontSize: "48px",
              fontWeight: "800",
              fontFamily: "Karla",
            }}
          >
            team.
          </Typography>
          <div>
            <Typography sx={{ fontSize: "14px" }}>
              <InstagramIcon sx={{ color: "red" }} />
              Instagram
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "14px" }}>
              <FacebookIcon sx={{ color: "blue" }} />
              Facebook
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "14px" }}>
              <TwitterIcon sx={{ color: "blue" }} />
              Twitter
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "14px" }}>
              <InstagramIcon sx={{ color: "red" }} />
              Instagram
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "14px" }}>
              <FacebookIcon sx={{ color: "blue" }} />
              Facebook
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "14px" }}>
              <TwitterIcon sx={{ color: "blue" }} />
              Twitter
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            Use Cases
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            UI Design
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            UX Design
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Prototyping
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            UI Design
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            UX Design
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Prototyping
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            Explore
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Figma
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Customers
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Why I Love Figma
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Figma
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Customers
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Why I Love Figma
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            Resources
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Community Resources Hub
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Support
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Education
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Community Resources Hub
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Support
          </Typography>
          <Typography
            sx={{
              fontFamily: "Karla",
              fontSize: "14px",
              lineHeight: "27px",
            }}
          >
            Education
          </Typography>
        </Box>
        <Box sx={{ alignSelf: "center" }}>
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontStyle: "normal",
              fontHeight: "600",
              fontSize: "18px",
              lineHeight: "29px",
            }}
          >
            Subscribe to our newsletter
          </Typography>
          <Box sx={{ display: "flex" }}>
            <InputUnstyled placeholder="Email" />
            <button style={{ background: "white" }}>
              <ArrowForwardIcon sx={{ color: "blue", background: "white" }} />
            </button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default footer;
