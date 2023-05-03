import styled from "styled-components";

export const MealSummaryCard = () => {
  return (
    <Container>
      <h3>Delicious Food, Delivered To You</h3>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Container>
  );
};
const Container = styled.div`
  width: 854px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  margin-top: -9%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 570px;
    height: 54px;
    font-weight: 600;
    font-size: 35px;
    line-height: 54px;
    color: #ffffff;
    margin: 36px 142px 18px 142px;
  }
  p {
    width: 746px;
    height: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    margin: 0 40px 36px;
  }
`;
