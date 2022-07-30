import React from 'react';
import Input from '../ui/Input/Input';
import SearchBox from '../ui/SearchBox/SearchBox';
import Multiselect from '../ui/Multiselect/Multiselect';
import SingleSelect from '../ui/SingleSelect/SingleSelect';
import Navigation from '../ui/Navigation/Navigation';
import { Button } from '../ui/ButtonPrimary/Button';
import ButtonSecondary from '../ui/ButtonSecondary/ButtonSecondary';
import AddButton from '../ui/AddButton/AddButton';
import Logo from '../ui/Logo/Logo';
import Notification from '../ui/Notification/Notification';
import Checkbox from '../ui/Checkbox/Checkbox';
import StyledLink from '../ui/StyledLink/StyledLink';
import Pagination from '../ui/Pagination/Pagination';
import HamburgerMenu from '../ui/HamburgerMenu/HamburgerMenu';
// import { TeamsCard } from '../components/TeamCard/TeamsCard';
import TeamList from '../components/TeamList/TeamList';
import TeamInfo from '../components/TeamInfo/TeamInfo';

const Components = () => {
  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
      <h1> Components Page</h1> <br /> <br />
      <h2>Login</h2>
      <Input onChange={() => console.log('hello')} type="text" />
      <br />
      <h2>SearchBox</h2>
      <SearchBox />
      <br />
      <h2>Multiselect</h2>
      <Multiselect />
      <br />
      <h2>SingleSelect</h2>
      <SingleSelect />
      <br />
      <h2>Header</h2>
      <Navigation />
      <br />
      <h2>Button</h2>
      <Button />
      <br />
      <h2>Button Secondary</h2>
      <ButtonSecondary />
      <br />
      <h2>Add Button</h2>
      <AddButton />
      <br />
      <h2>Logo</h2>
      <Logo />
      <br />
      <h2>Notification</h2>
      <Notification />
      <br />
      <h2>Checkbox</h2>
      <Checkbox />
      <br />
      <h2>Link</h2>
      <StyledLink text="text" path="/" />
      <br />
      <h2>Pagination</h2>
      <Pagination
        pageCount={5}
        onChange={function ({ selected }: { selected: number }): void {
          throw new Error('Function not implemented.');
        }}
      />
      <br />
      <h2>Hamburger</h2>
      <HamburgerMenu />
      <br />
      <h2>Teams Card</h2>
      <TeamList />
      <TeamInfo />
    </div>
  );
};

export default Components;
