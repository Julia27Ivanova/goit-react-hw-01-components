import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  ItemLabel,
  ItemPercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};