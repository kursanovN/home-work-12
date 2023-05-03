import React from "react";
import styled from "styled-components";

export const Button = ({ onClick, children, ...props }) => {
  return (
    <Buttons onClick={onClick} {...props}>
      {children}{" "}
    </Buttons>
  );
};

const Buttons = styled.button`
  width: 99px;
  height: 41px;
  background: #8a2b06;
  padding: 10px 24px 10px 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  /* border: none; */
`;
