import styled from "styled-components";

export const styles = {
  StoreTable: styled.table`
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
    & caption {
      letter-spacing: 1.5px;
      padding: 15px;
      font-weight: bold;
      border-radius: 30px;
      font-size: 25px;
      color: #000;
    }
    & tr {
      font-weight: 500;
      background: transparent;
      outline: none !important;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      &:hover {
        background: #000;
        color: #fff;
      }
      &:active {
        top: 2px;
      }
    }
    & th {
      width: 30%;
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      padding: 15px;
      border-top: 1px solid ${props => props.borderColor};
      border-bottom: 1px solid ${props => props.borderColor};
    }
    & td {
      font-size: 13px;
      border-top: 1px solid ${props => props.borderColor};
      border-bottom: 1px solid ${props => props.borderColor};
    }
    & > tbody > tr > td > p {
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      border-left: 1px solid ${props => props.borderColor};
      padding: 0 20px;
    }
    & > tbody > tr > td > div {
      border-left: 1px solid ${props => props.borderColor};
      padding: 0 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `,
  SearchBtn: styled.ul`
    top: 20px;
    position: relative;
    list-style: none;
    display: block;
    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
    & li {
      display: inline-block;
      position: relative;
      min-height: 80px;
      margin: 20px;
      -webkit-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
      span {
        position: absolute;
        text-align: center;
        color: #4d4d4d;
        text-transform: uppercase;
        width: 100%;
        top: 16px;
        z-index: -1;
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
      }
      &:hover span {
        transition: all 0.4s;
        background: #fff;
        top: 65px;
        position: absolute;
        padding-top: 4px;
        padding-bottom: 5px;
      }
      &:hover {
        transition: all 0.4s;
      }
    }
    & div {
      font-family: "Lato", sans-serif;
      font-size: 1.8em;
      color: #fff;
      font-weight: 400;
      text-transform: uppercase;
      padding: 10px 40px 10px 40px;
      cursor: pointer;
      box-shadow: 0 4px 5px 0 rgba(50, 50, 50, 0.75);
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      transition: all 0.2s;
      background: #2c3e50;

      &:hover {
        transition: all 0.4s;
        box-shadow: none;
        border-bottom: solid 8px #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
  `,
  SerchBtnFlame: styled.div`
    position: fixed;
    bottom: 30px;
    left: calc(50% - 200px);
  `
};
