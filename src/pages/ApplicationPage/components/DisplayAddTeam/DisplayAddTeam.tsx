import React, { useState } from 'react';
import './DisplayAdd.css';
import CustomImageUploading from '../CustomImageUploading/CustomImageUploading';
import Input from '../../../../ui/Input/Input';
import ButtonSecondary from '../../../../ui/ButtonSecondary/ButtonSecondary';
import { Button } from '../../../../ui/ButtonPrimary/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createNewTeam } from '../../../../core/redux/store/reducers/team/teamSlice';
import { ImageListType } from 'react-images-uploading';
const DisplayAddTeam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [division, setDivision] = useState('');
  const [foundationYear, setFoundationYear] = useState(0);
  const [conference, setConference] = useState('');
  const [imageUrl, setImageUrl] = useState([]);

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImageUrl(imageList as never[]);
  };
  const handleName = (value: string) => {
    setName(value);
  };
  const handleDivision = (value: string) => {
    setDivision(value);
  };
  const handleFoundationYear = (value: number) => {
    setFoundationYear(value);
  };
  const handleConference = (value: string) => {
    setConference(value);
  };
  const teamData = {
    name,
    division,
    foundationYear,
    conference,
    imageUrl,
  };
  return (
    <div className="addItem__display">
      <div className="display__wrapper">
        <div className="leftBlock">
          <div className="leftBlock__heading">
            <span>Teams</span> / <span>Add new team</span>
          </div>
          <CustomImageUploading value={imageUrl} onChange={onChange} />
        </div>
        <div className="rightBlock">
          <Input type={'text'} onChange={handleName} title="Name" />
          <Input type={'text'} onChange={handleDivision} title="Devision" />
          <Input type={'text'} onChange={handleConference} title="Conference" />
          <Input type={'text'} onChange={handleFoundationYear} title="Year of foundation  " />
          <div className="rightBlock__control">
            <ButtonSecondary onClick={() => navigate('/dashboard/teams')} />
            <Button onClick={() => dispatch(createNewTeam(teamData))}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAddTeam;
