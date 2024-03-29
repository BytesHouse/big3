import React from 'react';
// import style from './Multiselect.module.css';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Multiselect = () => {
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      border: '.5px solid #D1D1D1',
      boxShadow: 'none',
      ':hover': {
        borderColor: '#D1D1D1',
      },
    }),
    multiValueLabel: (styles: any) => ({
      ...styles,
      color: 'white',
      padding: '4px',
      fontFamily: 'Avenir, sans-serif',
      fontWeight: '400',
    }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      color: 'white',
    }),
    multiValue: (styles: any) => ({
      ...styles,
      backgroundColor: '#C60E2E',
      borderRadius: '4px',
    }),
    container: (styles: any) => ({
      ...styles,
      width: '300px',
    }),
    indicatorsContainer: (styles: any) => ({
      ...styles,
      color: '#D1D1D1',
      ':hover': {
        color: '#D1D1D1 !important',
      },
    }),
  };

  return <Select closeMenuOnSelect={false} options={options} isMulti styles={colourStyles} />;
};

export default Multiselect;
