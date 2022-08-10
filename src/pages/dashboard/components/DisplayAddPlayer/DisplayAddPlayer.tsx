import React, { useEffect, useState } from 'react';
import './DisplayAddPlayer.css';
import addPhotoTeam from '../../../../assets/icon/photo.svg';
import Input from '../../../../ui/Input/Input';
import ButtonSecondary from '../../../../ui/ButtonSecondary/ButtonSecondary';
import { Button } from '../../../../ui/ButtonPrimary/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveImageApi } from '../../../../api/requests/imageSaveApi';
import { createNewPlayer } from '../../../../core/redux/store/reducers/player/playerSlice';
import { fetchPlayersPosition } from '../../../../core/redux/store/reducers/players/playersSlice';
import { SingleSelect } from '../../../../ui';
import { fetchTeamData } from '../../../../core/redux/store/reducers/teams/teamsSlice';
import { useForm, FormProvider } from 'react-hook-form';

const initialState = {
  avatarUrl: '',
  name: '',
  position: '',
  team: null,
  height: null,
  weight: null,
  birthday: '', // 2022-08-06T08:26:39.246Z
  number: null,
};

const newArrayPosition = (arr: []) => {
  if (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const newObj = {
        value: arr[i],
        label: arr[i],
      };
      newArr.push(newObj);
    }
    return newArr;
  }
};

const newArrayTeam = (arr: any) => {
  if (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const newObj = {
        value: arr[i].id,
        label: arr[i].name,
      };
      newArr.push(newObj);
    }
    return newArr;
  }
};

const DisplayAddPlayer = () => {
  const methods = useForm();
  const { positions } = useSelector((store: any) => store.players);
  const { teams } = useSelector((store: any) => store.teams);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const handleChange = (e: any) => {
    const name = e.target.name;
    if (e.target.name === 'avatarUrl') {
      const image = e.target.files[0];
      const img = saveImageApi(image);
      img.then(function (result) {
        setValues({ ...values, avatarUrl: `http://dev.trainee.dex-it.ru${result}` });
      });
      return;
    }
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleSelectPosition = (e: any) => {
    const value = e.value;
    setValues({ ...values, position: value });
  };
  const handleSelectTeam = (e: any) => {
    const value = e.value;
    setValues({ ...values, team: value });
  };
  useEffect(() => {
    dispatch(fetchPlayersPosition());
    dispatch(fetchTeamData('Team/GetTeams'));
  }, []);
  const newPos = newArrayPosition(positions);
  const newTeam = newArrayTeam(teams.data);
  return (
    <div className="addItem__display">
      <div className="display__wrapper">
        <div className="leftBlock">
          <div className="leftBlock__heading">
            <span>Players</span> / <span>Add new player</span>
          </div>
          <div className="field__wrapper">
            <label htmlFor="file-input" className="field__file-wrapper">
              <div className="field__file-fake">
                <img
                  className="image__container"
                  src={values.avatarUrl ? values.avatarUrl : addPhotoTeam}
                  alt=""
                />
              </div>
            </label>
            <input
              id="file-input"
              className="field field__file"
              type="file"
              accept="image/*"
              name="avatarUrl"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="rightBlock">
          <FormProvider {...methods}>
            <form action="">
              <Input type={'text'} onChange={handleChange} title="Name" name="name" />
              <div className="select__wrapper">
                <div className="label">Position</div>
                <SingleSelect
                  name="position"
                  onChange={handleSelectPosition}
                  style={{ width: '100%' }}
                  data={newPos}
                />
              </div>
              <div className="select__wrapper">
                <div className="label">Team</div>
                <SingleSelect
                  name="team"
                  onChange={handleSelectTeam}
                  style={{ width: '100%' }}
                  data={newTeam}
                />
              </div>
              <div className="flex">
                <Input type={'number'} onChange={handleChange} title="Height (cm)" name="height" />
                <Input type={'number'} onChange={handleChange} title="Weight (kg)" name="weight" />
              </div>
              <div className="flex">
                <Input type={'date'} onChange={handleChange} title="Birthday" name="birthday" />
                <Input type={'number'} onChange={handleChange} title="Number" name="number" />
              </div>
            </form>
          </FormProvider>
          <div className="rightBlock__control">
            <ButtonSecondary onClick={() => navigate('/dashboard/players')} />
            <Button onClick={() => dispatch(createNewPlayer(values))}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAddPlayer;
