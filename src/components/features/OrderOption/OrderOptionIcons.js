import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({setOptionValue, values, required}) => (

  <div className={styles.icon}>
    {!required ? '' : (
      <div
        className={styles.icon}
        value= ''
        onClick={() => setOptionValue('')}
      >
        <Icon name= 'times-circle' />
        none
      </div>
    )}
    {values.map(value => (
      <div
        key={value.id}
        className={styles.icon}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  required: PropTypes.bool,
};

export default OrderOptionIcons;
