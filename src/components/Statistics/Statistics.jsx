import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const colors = ['#e61cba', '#2d20e0', '#32eb4b', '#d86c24', '#e0d03c'];

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li className={s.item} key={id} style={{ background: colors[index] }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.ptopTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
