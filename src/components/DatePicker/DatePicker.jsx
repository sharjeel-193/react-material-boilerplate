import 'date-fns';
import React from 'react';
import { Box } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

import PropTypes from 'prop-types';

const DatePicker = props => {
  // The first commit of Material-UI
  const { type, variant, value, label, onChange, ...other } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box mb={1}>
        {type === 'date' ? (
          <KeyboardDatePicker
            {...other}
            inputVariant={variant}
            margin="normal"
            label={label}
            format="MM/dd/yyyy"
            value={value}
            onChange={onChange}
            clearable
            showTodayButton
            KeyboardButtonProps={{
              'aria-label': `change ${type}`
            }}
          />
        ) : (
          <KeyboardTimePicker
            {...other}
            inputVariant={variant}
            margin="normal"
            label={label}
            value={value}
            onChange={onChange}
            clearable
            KeyboardButtonProps={{
              'aria-label': `change ${type}`
            }}
          />
        )}
      </Box>
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  type: PropTypes.oneOf(['time', 'date']).isRequired,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string.isRequired
};

export default DatePicker;
