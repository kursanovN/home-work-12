import styled from "styled-components";
import { Button } from "../UI/Button";
import { Bagdrop } from "./Bagdrop";

const modalCard = [
  {
    foodName: "Barbecue Burger",
    foodPrice: 22.99,
    quantity: 1,
    total: 0.0,
  },
  {
    foodName: "Schnitzel",
    foodPrice: 22.99,
    quantity: 1,
    total: 0.0,
  },
];
export const Modal = ({ closeModal }) => {
  return (
    <>
      <Bagdrop onClick={closeModal}>
        <div>
          <Modals>
            {modalCard.map((el) => {
              return (
                <>
                  <ModalCard>
                    <h4>{el.foodName}</h4>
                    <BlockCard>
                      <div>
                        <h3>${el.foodPrice}</h3>
                        <span>x{el.quantity}</span>
                      </div>
                      <div className="buttonCards">
                        <button>-</button>
                        <button>+</button>
                      </div>
                    </BlockCard>
                  </ModalCard>
                  <Span></Span>
                </>
              );
            })}
            <ModalBlock>
              <h2>Total Amount</h2>
              <h3>$0.00</h3>
            </ModalBlock>
            <ContainerButton>
              <Buttonss onClick={closeModal}>Close</Buttonss>
              <Button className="order">Order</Button>
            </ContainerButton>
          </Modals>
        </div>
      </Bagdrop>
    </>
  );
};

const Modals = styled.div`
transition:0.5 ease;
  animation: all 0.4s ease-in-out forwards;
  width: 671px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  padding: 10px 0 20px 0;
  margin-top: 100px;
`;

const ModalBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 0 32px;

  h2 {
    width: 141px;
    height: 30px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #222222;
  }
  h3 {
    width: 63px;
    height: 33px;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #8a2b06;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  gap: 16px;

  .order {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 110px;
    height: 44px;
    background: #8a2b06;
    border-radius: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    border: none;
    &:hover{
        background: #7E2A0A;
  }
  &:active{
    background: #993108;
  }
  }
`;
const Buttonss = styled(Button)`
  width: 110px;
  height: 44px;
  background-color: #fff;
  border: 1px solid #8a2b06;
  color: #8a2b06;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  margin-left: 61%;
  &:hover{
    background: #8A2B06;
    color: #fff;

  }
  &:active{
    background: #993108;
    color: #fff;

  }
`;
// !  card
const ModalCard = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  padding: 0 70px 0 32px;
  margin: 0;
  gap: 12px;
`;

const BlockCard = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    width: 171px;
    height: 30px;
    font-weight: 600;
    font-size: 20px;
    color: #222222;
  }
  div {
    display: flex;
    align-items: center;
    gap: 47px;
  }
  h3 {
    width: 67px;
    height: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
  span {
    width: 46px;
    height: 36px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttonCards {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    button {
      width: 48px;
      height: 36px;
      border-radius: 6px;
      border: 2px solid #8a2b06;
      color: #8a2b06;
      background-color: #fff;

      &:hover{
        background: #8A2B06;
        color: #fff;
      }
      &:active{
        background: #993108;
        color: #fff;

      }
    }

  }
`;
const Span = styled.span`
  width: 607px;
  margin-left: 32px;
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;
