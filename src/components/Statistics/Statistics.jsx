import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsSection>
      <Title>UPLOAD STATS</Title>
      <StatList>
        {data.map(({ id, label, percentage }) => (
          <Item backgroundColor={getRandomHexColor()} key={id}>
            <Label>{label}: </Label>
            <Percentage>{percentage}% </Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
