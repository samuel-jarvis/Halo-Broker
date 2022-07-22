import React from "react";
import devicesImage from "../../asset/devices.png";
import Downloads from "../Downloads/Downloads";

import {
  DevicesContainer,
  DevicesHeading,
  DevicesSubHeading,
  DevicesInfoContent,
  DevicesInfoImage,
  DevicesInfoText,
  DevicesInfoRatingCard,
  RatingInfo,
  RatingStars,
  RatingStarsGroup,
  StarIcon,
  StarIconHalf,
  RatingValue,
  SplideContainer,
  SplideElement,
} from "./DevicesStyled";

const Devices = () => {
  return (
    <DevicesContainer>
      <DevicesHeading>Smooth Experience on All Devices</DevicesHeading>
      <DevicesSubHeading>
        Whether you prefer <b>trading at your desk or on the go</b> - Halo
        Broker has got you covered.
      </DevicesSubHeading>

      <DevicesInfoContent>
        <DevicesInfoImage>
          <img src={devicesImage} alt="devices" />
        </DevicesInfoImage>
        <DevicesInfoText>
          <p>
            The custom-built platform has been adapted to any device you may
            choose and switching is 100% seamless.
          </p>
          <SplideContainer
            options={{
              pagination: true,
              // gap: "1rem",
              arrows: false,
              // // paginationDirection: "ttb",
              // // direction: "ttb",
              // // heightRatio: 0.4,
              autoplay: true,
              interval: 4000,
              // speed: 600,
              // type: "loop",
            }}
          >
            <DevicesInfoRatingCard>
              <RatingInfo>
                <RatingValue>4.5</RatingValue>
                <RatingStars>
                  <RatingStarsGroup>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIconHalf />
                  </RatingStarsGroup>
                  <p>Samuel Jarvis</p>
                </RatingStars>
              </RatingInfo>
              <p>
                This is the best trading platform I've ever seen. Thank you so
                much!
              </p>
            </DevicesInfoRatingCard>

            <DevicesInfoRatingCard>
              <RatingInfo>
                <RatingValue>5.0</RatingValue>
                <RatingStars>
                  <RatingStarsGroup>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </RatingStarsGroup>
                  <p>Another User</p>
                </RatingStars>
              </RatingInfo>
              <p>
                This is a demo project made by Samuel Jarvis Using React and
                Styled Components!
              </p>
            </DevicesInfoRatingCard>
          </SplideContainer>
        </DevicesInfoText>
      </DevicesInfoContent>

      <Downloads />
    </DevicesContainer>
  );
};

export default Devices;
