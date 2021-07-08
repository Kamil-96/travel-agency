import React, { useState } from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = () => {

  const [date, handleDateSelect, handleDateChange] = useState(new Date());
  return (
    <DatePicker
      className={styles.input}
      selected={date}
      onSelect={handleDateSelect}
      onChange={handleDateChange}
    />
  );
};

export default OrderOptionDate;
