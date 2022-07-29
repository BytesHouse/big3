import React, { useState } from 'react';
import './DisplayAdd.css';
import CustomImageUploading from '../CustomImageUploading/CustomImageUploading';
import Input from '../../../../ui/Input/Input';
import ButtonSecondary from '../../../../ui/ButtonSecondary/ButtonSecondary';
const DisplayAddTeam = () => {
  const [name, setName] = useState('');
  const handleName = (value: string) => {
    setName(value);
  };
  // eslint-disable-next-line no-unused-vars
  const teamData = {
    name,
  };
  return (
    <div className="addItem__display">
      <div className="display__wrapper">
        <div className="leftBlock">
          <div className="leftBlock__heading">
            <span>Teams</span> / <span>Add new team</span>
          </div>
          <CustomImageUploading />
        </div>
        <div className="rightBlock">
          <Input type={'text'} onChange={handleName} title="Name" />
          <Input type={'text'} onChange={handleName} title="Devision" />
          <Input type={'text'} onChange={handleName} title="Conference" />
          <Input type={'text'} onChange={handleName} title="Year of foundation  " />
          <ButtonSecondary />
        </div>
      </div>
    </div>
  );
};

export default DisplayAddTeam;
