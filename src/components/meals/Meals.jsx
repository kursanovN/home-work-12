import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
const orderFoods = [
  {
    foodName: "Sushi",
    foodComment: "Finest fish and veggies",
    foodPrice: 22.99,
    amount: "Amount",
    quantity: 1,
    button: "Add",
  },
  {
    foodName: "Schnitzel",
    foodComment: "A german specialty!",
    foodPrice: 16.0,
    amount: "Amount",
    quantity: 1,
    button: "Add",
  },
  {
    foodName: "Barbecue Burger",
    foodComment: "American, raw, meaty",
    foodPrice: 12.99,
    amount: "Amount",
    quantity: 1,
    button: "Add",
  },
  {
    foodName: "Green Bowl",
    foodComment: "Healthy...and green...",
    foodPrice: 19.99,
    amount: "Amount",
    quantity: 2,
    button: "Add",
  },
];
export const Meals = () => {
  return (
    <Container>
      {orderFoods.map((el) => {
        return (
          <>
            <CardContainer>
              <BlockCard>
                <h4>{el.foodName}</h4>
                <i>{el.foodComment}</i>
                <h3>${el.foodPrice}</h3>
              </BlockCard>
              <BlockCards>
                <Card>
                  <h3>{el.amount}</h3>
                  <input type="number" defaultValue={el.quantity} />
                </Card>
                <Buttons> + {el.button}</Buttons>
              </BlockCards>
            </CardContainer>
            <Span></Span>
          </>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 40px 0 0 0;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 149px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px 20px 58px;
`;
const BlockCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h4 {
    width: 50px;
    height: 27px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
  i {
    width: 184px;
    height: 24px;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
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
`;
const BlockCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  h3 {
    width: 75px;
    height: 27px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    color: #222222;
  }
`;
const Card = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
`;
const Buttons = styled(Button)`
  width: 99px;
  height: 41px;
  background: #8a2b06;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 24px 10px 16px;
  border-radius: 20px;
  font-size: 17px;
  border: none;
  &:hover{
    background: #7E2A0A;
  }
  &:active{
    background: #993108;
  }
`;
const Span = styled.span`
  margin-left: 40px;
  box-sizing: border-box;
  width: 959px;
  height: 0px;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;
