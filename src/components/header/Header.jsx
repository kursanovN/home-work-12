import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Modal } from "../modal/Modal";
import { OrderBucket } from "./OrderBucket";
export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      {openModal &&
        createPortal(
          <Modal closeModal={openModalHandler} />,
          document.getElementById("modal")
        )}
      <Container>
        <h1>ReactMeals</h1>
        <OrderBucket openModal={openModalHandler}>Your Cart</OrderBucket>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  position: fixed;

  h1 {
    width: 226px;
    height: 57px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #ffffff;
  }
 
`;
