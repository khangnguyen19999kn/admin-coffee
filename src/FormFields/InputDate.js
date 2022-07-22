import { useController } from 'react-hook-form';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



export default function InputDate({
    name,
    control,
    label,
    type,
    ...inputProps
}) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack spacing={1}>
    <DesktopDatePicker
          label={label}
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          error={invalid}
          helperText={error?.message}
          inputProps={inputProps}
         
          renderInput={(params) => <TextField {...params} />}
        />
    </Stack>
    </LocalizationProvider>    
  
  )
}
