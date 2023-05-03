import styled from "styled-components";

export const Bagdrop = ({ children, onClick }) => {
  return (
    <>
      <Bagdrops onClick={onClick}>{children}</Bagdrops>;
    </>
  );
};

const Bagdrops = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 8;
  top: 0px;
`;
