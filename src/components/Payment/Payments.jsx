import React from "react";
// import {visa,  mastercard,  neteller,  skrill,} from './Data'
import visa from "../../asset/visa.png";
import mastercard from "../../asset/mastercard.png";
import neteller from "../../asset/neteller.png";
import skrill from "../../asset/skrill.png";
import paypal from "../../asset/paypal.png";
import webmoney from "../../asset/webmoney.png";

import {
  PaymentContainer,
  PaymentHeading,
  PaymentSubHeading,
  ImageContainer,
} from "./PaymentStyled";

const Payments = () => {
  return (
    <PaymentContainer>
      <PaymentHeading>No Limits. No Fees. No Holdback.</PaymentHeading>
      <PaymentSubHeading>
        Quick and Easy Depoists and Withdrawals
      </PaymentSubHeading>
      <ImageContainer>
        <img src={visa} alt="visa" />
        <img src={mastercard} alt="mastercard" />
        <img src={neteller} alt="neteller" />
        <img src={webmoney} alt="webmoney" />
        <img src={skrill} alt="skrill" />
        <img src={paypal} alt="paypal" />
      </ImageContainer>
    </PaymentContainer>
  );
};

export default Payments;
