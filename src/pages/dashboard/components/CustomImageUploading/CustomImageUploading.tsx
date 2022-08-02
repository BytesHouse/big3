import React from 'react';
import ImageUploading from 'react-images-uploading';
import test from '../../../../assets/icon/photo.svg';
import { img, btn, btnDrag } from './styles.ts';

const CustomImageUploading = (props: any) => {
  const { onChange, value } = props;
  const maxNumber = 69;

  return (
    <div>
      <ImageUploading value={value} onChange={onChange} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, isDragging, dragProps }) => (
          // write your building UI
          <div>
            <button
              style={isDragging ? { ...btnDrag } : { ...btn }}
              onClick={onImageUpload}
              {...dragProps}
            >
              {imageList[0] ? (
                <img style={{ ...img }} src={imageList[0].dataURL} alt="" />
              ) : (
                <img src={test} />
              )}
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default CustomImageUploading;
