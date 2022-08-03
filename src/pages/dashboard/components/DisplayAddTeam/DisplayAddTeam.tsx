import React, { useState } from 'react';
import './DisplayAdd.css';
import addPhotoTeam from '../../../../assets/icon/photo.svg';
import Input from '../../../../ui/Input/Input';
import ButtonSecondary from '../../../../ui/ButtonSecondary/ButtonSecondary';
import { Button } from '../../../../ui/ButtonPrimary/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createNewTeam } from '../../../../core/redux/store/reducers/team/teamSlice';
import { saveImageApi } from '../../../../api/requests/imageSaveApi';
// import { BASE_URL } from '../../../../api/Constants';

const initialState = {
  name: '',
  division: '',
  foundationYear: 0,
  conference: '',
  imageUrl: '',
};

const DisplayAddTeam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const handleChange = (e: any) => {
    const name = e.target.name;
    if (e.target.name === 'imageUrl') {
      const image = e.target.files[0];
      const img = saveImageApi(image);
      img.then(function (result) {
        setValues({ ...values, imageUrl: `http://dev.trainee.dex-it.ru${result}` });
        console.log(result);
      });
      console.log(img);
      return;
    }
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="addItem__display">
      <div className="display__wrapper">
        <div className="leftBlock">
          <div className="leftBlock__heading">
            <span>Teams</span> / <span>Add new team</span>
          </div>
          <div className="field__wrapper">
            <label htmlFor="file-input" className="field__file-wrapper">
              <div className="field__file-fake">
                <img src={values.imageUrl ? values.imageUrl : addPhotoTeam} alt="" />
              </div>
            </label>
            <input
              id="file-input"
              className="field field__file"
              type="file"
              accept="image/*"
              name="imageUrl"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="rightBlock">
          <Input type={'text'} onChange={handleChange} title="Name" name="name" />
          <Input type={'text'} onChange={handleChange} title="Devision" name="devision" />
          <Input type={'text'} onChange={handleChange} title="Conference" name="conference" />
          <Input
            type={'text'}
            onChange={handleChange}
            title="Year of foundation"
            name="foundationYear"
          />
          <div className="rightBlock__control">
            <ButtonSecondary onClick={() => navigate('/dashboard/teams')} />
            <Button onClick={() => dispatch(createNewTeam(values))}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAddTeam;
