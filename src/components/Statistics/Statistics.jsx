import {
  Title,
  StatisticList,
  StatisticItem,
  Label,
  Text,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <Title>Statistics</Title>
      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
      </StatisticList>
      <Label>Total: {total}</Label>
      <Text>Positive feedback {positivePercentage}%</Text>
    </section>
  );
};

export { Statistics };
