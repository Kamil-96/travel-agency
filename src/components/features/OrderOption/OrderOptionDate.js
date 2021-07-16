import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

const OrderOptionDate = ({setOptionValue, currentValue}) => {


  return (
    <DatePicker
      className={styles.input}
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
    />

  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;
