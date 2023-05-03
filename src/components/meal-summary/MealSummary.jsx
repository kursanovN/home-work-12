import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/iamges/OrderImg.png";
import { MealSummaryCard } from "./MealSummaryCard";

export const MealSummaty = () => {
  return (
    <Container>
      <Image src={summaryImage} alt="summary " />
      <MealSummaryCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 432px;
`;
