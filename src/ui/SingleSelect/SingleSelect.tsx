import React from 'react';
import Select from 'react-select';

interface propOption {
  data?: object[];
  style?: {};
  onChange?: (e: any) => void;
  name?: string;
}

const SingleSelect = (props: propOption) => {
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
      width: '100%',
    }),
    indicatorsContainer: (styles: any) => ({
      ...styles,
      color: '#D1D1D1',
      ':hover': {
        color: '#D1D1D1 !important',
      },
    }),
  };
  const { data, onChange, name } = props;
  return (
    <Select
      name={name}
      onChange={onChange}
      menuPlacement="auto"
      options={data}
      styles={colourStyles}
    />
  );
};

export default SingleSelect;
