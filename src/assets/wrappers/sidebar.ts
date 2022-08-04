import styled from 'styled-components';

const Wrapper = styled.div`
  @media screen and (max-width: 576px) {
    .container {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 80px;
      left: 0;
      transform: translateX(-130%);
      transition: all 0.2s;
      z-index: 1;
    }
    .show {
      transform: translateX(0);
    }
  }
  .container {
    background-color: white;
    width: 140px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 100px 30px 50px 30px;
  }
  .show {
    transform: translateX(0);
  }
  span {
    font-size: 14px;
  }
  .container img {
    width: 25px;
    height: 25px;
  }
  .flex {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;
  }
`;
export default Wrapper;
