import React from "react";
import { FooterContainer, 
  FooterLinks, 
  FooterGroup,
  SocialCards,
  SocialCard,
  FBIcon,
  YTIcon } from "./FooterStyled";
import Links from "./LinksData";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        {Links.map((link) => (
          <FooterGroup key={link.LinkHead}>
            <h3>{link.LinkHead}</h3>
            <ul>
              {link.Links.map((link) => (
                <li key={link.LinkText}>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </FooterGroup>
        ))}

        <SocialCards>
          <SocialCard bg="blue" margin="2rem">
            <FBIcon />
            <h4>1M</h4>
            <p>Facebook</p>
          </SocialCard>

          <SocialCard bg="red">
            <YTIcon />
            <h4>220K</h4>
            <p>Youtube</p>
          </SocialCard>
        </SocialCards>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
