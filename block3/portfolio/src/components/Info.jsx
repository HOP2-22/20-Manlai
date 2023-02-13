import React from "react";
import Label from "./Label";
import Paragraph from "./Paragraph";
import { Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function Info() {
  return (
    <Container maxWidth="sm">
      <div>
        <div className="flex namePic info">
          <h2 className="White infoFont">
            Erdenemunkh Manlai
            <div> Programmer ( Developer )</div>
          </h2>
          <img
            src="https://cdn.discordapp.com/attachments/1011859321698652193/1073530339651231804/images.png"
            alt="Lamelo"
            height="100px"
            width="100px"
            style={{ borderRadius: "50px", border: "3px solid white" }}
          />
        </div>
        <Label>Works</Label>
        <div className="flex works">
          <Paragraph>
            &nbsp;&nbsp;&nbsp;Manlai is a freelance and a full-stack developer
            based in Osaka with a passion for building digital services/stuff he
            wants. He has a knack for all things launching products, from
            planning and designing all the way to solving real-life problems
            with code. When not online, he loves hanging out with his camera.
            Currently, he is living off of his own product called{" "}
            <a href="https://pinecone.mn/">Inkdrop.</a> He publishes content for
            marketing his products and his YouTube channel called{" "}
            <a href="https://www.youtube.com/">"Dev as Life"</a> has more than
            100k subscribers.
          </Paragraph>
          <button className="goPortfolio">My portfolio {">"}</button>
        </div>
        <div>
          <Label>Bio</Label>
          <Paragraph>
            <span className="year">2007</span>
            &nbsp;&nbsp; Born in Ulanbator, Mongolia.
          </Paragraph>
          <Paragraph>
            <span className="year">2013</span>
            &nbsp;&nbsp; Went to Logarithm School in Ulanbator,
            <br />
            Student for 10 years and on.
          </Paragraph>
          <Paragraph>
            <span className="year">2022</span>
            &nbsp;&nbsp; Selected as Student for{" "}
            <a href="https://pinecone.mn/">Pinecone.</a> Academy.
          </Paragraph>
        </div>
        <div>
          <Label>I ♥</Label>
          <Paragraph>
            Programming, Music,{" "}
            <a href="https://www.youtube.com/watch?v=2hdHUID8C6w">Basketball</a>
          </Paragraph>
        </div>
        <div>
          <Label>On the web</Label>
          <div className="flex links">
            <a href="https://github.com/HOP2-22/20-Manlai">
              <button className="linkButton">
                <span>
                  <GitHubIcon />
                </span>
                @20-Manlai
              </button>
            </a>
            <a href="https://www.instagram.com/theycall_imak/">
              <button className="linkButton">
                <span>
                  <InstagramIcon />
                </span>
                Manlai
              </button>
            </a>
          </div>
        </div>
        <div className="flex twoLinks">
          <a href="https://www.youtube.com/">Cool Link</a>
          <a href="https://boginoo-1.web.app/">
            Boginoo
            <br />
            Link Shortening App
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Info;
