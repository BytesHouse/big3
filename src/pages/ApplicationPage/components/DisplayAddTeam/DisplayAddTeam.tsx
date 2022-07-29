import React from 'react';
import './DisplayAdd.css';
import CustomImageUploading from '../CustomImageUploading/CustomImageUploading';
const DisplayAddTeam = () => {
  return (
    <div className="addItem__display">
      <div className="display__wrapper">
        <div className="leftBlock">
          <div className="leftBlock__heading">
            <span>Teams</span> / <span>Add new team</span>
          </div>
          <CustomImageUploading />
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default DisplayAddTeam;
