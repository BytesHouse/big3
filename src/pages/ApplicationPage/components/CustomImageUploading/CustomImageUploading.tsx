import React, { useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import test from '../../../../assets/icon/photo.svg';
import { img, btn, btnDrag } from './styles.ts';

const CustomImageUploading = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
  return (
    <div>
      <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
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
