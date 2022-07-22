import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as React from 'react';
import { useController } from 'react-hook-form';


export function TextAreaField({
    name,
    control,
    label,
    
    
}) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    

    return (
        <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              value={value}
              onChange={onChange}
              placeholder="Type introduce"
              style={{ width: 450 }}
              control={control}
              name="introduce"
            />
    );
}