import styled from '@emotion/styled';

const Title = styled.h2`
  text-align: center;
  color: #f27010;
`;
const StatisticList = styled.ul`
  margin-left: 40px;
  margin-bottom: 15px;
  padding: 0;
  list-style: none;
`;

const StatisticItem = styled.li`
  font-size: 17px;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  color: #f27010;
`;

const Label = styled.span`
  display: block;
  margin-left: 40px;
  font-size: 19px;
  margin-bottom: 40px;
  color: #f27010;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;
export { Title, StatisticList, StatisticItem, Label, Text };
