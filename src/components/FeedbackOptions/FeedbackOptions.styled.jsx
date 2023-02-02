import styled from '@emotion/styled';

const Titile = styled.h2`
  margin-bottom: 50px;

  color: #f27010;
  text-align: center;
`;

const FeedbackList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 55px;
  padding: 0;
  list-style: none;
`;

const FeedbackItem = styled.li``;

const Button = styled.button`
  display: block;
  height: 40px;
  width: 110px;
  background-color: #f27010;
  border: none;
  border-radius: 6px;

  font-size: 17px;
  letter-spacing: 1.5;
  font-weight: 500;
`;

export { Titile, FeedbackList, FeedbackItem, Button };
