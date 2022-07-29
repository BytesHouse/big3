import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './AddButton.module.css';

const AddButton = ({ path }: any) => {
  const navigate = useNavigate();
  const url = path;
  return (
    <button onClick={() => navigate(url)} className={style.addButton}>
      Add +
    </button>
  );
};

export default AddButton;
