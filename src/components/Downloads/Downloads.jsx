import React from "react";
import mt4 from "../../asset/metatrader.png";
import apple from "../../asset/apple.png";
import playstore from "../../asset/playstore.png";
import {
  DownloadsContainer,
  DownloadGroup,
  CategoryHeading,
  DeviceCategory,
  DeviceCard,
  DeviceGroup,
  CardDetails,
  DownloadAmt,
} from "./DownloadStyled";

const Downloads = () => {
  return (
    <DownloadsContainer>
      <DeviceCategory>
        <CategoryHeading>Desktop</CategoryHeading>

        <DeviceGroup grid="grid">
          <DeviceCard>
            <img src={mt4} alt="" />
            <CardDetails>
              <p>Available On</p>
              <h4>MetaTrader4</h4>
            </CardDetails>
          </DeviceCard>

          <DeviceCard>
            <img src={apple} alt="" />
            <CardDetails>
              <p>Download App for</p>
              <h4>MacOs</h4>
            </CardDetails>
          </DeviceCard>
        </DeviceGroup>
      </DeviceCategory>

      <DeviceCategory>
        <CategoryHeading>Mobile</CategoryHeading>

        <DeviceGroup>
          <DeviceCard margin="0">
            <img src={playstore} alt="" />
          </DeviceCard>

          <DeviceCard margin="0">
            <img src={apple} alt="" />
          </DeviceCard>
        </DeviceGroup>
      </DeviceCategory>

      <DeviceCategory>
        <CategoryHeading>Apps Download</CategoryHeading>
        <DownloadAmt>12M+</DownloadAmt>
      </DeviceCategory>
    </DownloadsContainer>
  );
};

export default Downloads;
