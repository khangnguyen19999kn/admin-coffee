import * as React from 'react';
import { useController } from 'react-hook-form';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export function CkEditorField({
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
        <CKEditor
     
            editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data)
            }}
            config={{
                mediaEmbed: {
                    previewsInData: true,
                },
                ckfinder: {
                    uploadUrl: `localhost:3000/v1/ke/imageckeditor`,
                },
            }}
            
        />
    );
}