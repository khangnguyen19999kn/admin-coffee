import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';


export default function InputFile({ name,
  control,
  label,
  type,
  onChange,
  ...inputProps }) {
  const [fileList, setFileList] = useState([]);

  const onRemove = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);

    onChange?.(newFileList)
  };

  const beforeUpload = (file) => {
    const newFileList = [...fileList, file];
    setFileList(newFileList);
    
    onChange?.(newFileList)
    return false;
  };


  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Upload
        listType="picture"
        maxCount={1}
        onRemove={onRemove}
        beforeUpload={beforeUpload}
        fileList={fileList}

      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>

    </Space>
  );
}
