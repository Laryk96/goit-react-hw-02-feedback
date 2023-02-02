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
        <StatisticItem>good: {good}</StatisticItem>
        <StatisticItem>neutral: {neutral}</StatisticItem>
        <StatisticItem>bad: {bad}</StatisticItem>
      </StatisticList>
      <Label>total: {total}</Label>
      <Text>Positive feedback {positivePercentage}%</Text>
    </section>
  );
};

export { Statistics };
