import React, {  useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useController } from 'react-hook-form';

export default function SelectField({options, name,
  control,label}) {
    const {
      field: { value, onChange, onBlur, ref },
      fieldState: { invalid, error },
  } = useController({
      name,
      control,
  });



  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={onChange}
          label="Loại"
        >
          {options.map((opt)=>{
            return <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
          })}
       
        </Select>
      </FormControl>
      
    </div>
  );
}