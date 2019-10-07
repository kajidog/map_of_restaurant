import styled from "styled-components";

export const styles = {
  BigCardFlame: styled.div`
    position: relative;
    margin: 30px auto;

    background-color: white;
    ${props => {
      switch (props.mode) {
        case "mini":
          return `
          width: 93%;
          padding: 20px 5%;
          `;
        case "normal":
          return `
        width: 100%;
        padding: 20px 8%;
        `;
        default:
      }
    }}
    border: none;
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    &:before,
    &:after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      background: #000;
      transition: all 0.3s ease;
    }
    &:before {
      height: 0%;
      width: 2px;
    }
    &:after {
      width: 0%;
      height: 2px;
    }
    &:hover:before {
      height: 100%;
    }
    &:hover:after {
      width: 100%;
    }
  `,
  DescriptionArea: styled.div`
    & > p {
      font-weight: bold;
    }
  `,
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
      max-width: 370px;
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
      border-left: 1px solid rgba(164, 164, 164, 0.74);
      padding: 0 20px;
    }
    & > tbody > tr > td > div {
      border-left: 1px solid rgba(164, 164, 164, 0.74);
      padding: 0 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `,
  AccessButton: styled.li`
    list-style: none;
    margin-bottom: 5px;
  `,
  Img: styled.div`
    width: 100%;
    display: flex;
    overflow-y: hidden;
    height: auto;
    & img {
      max-height: 300px;
      margin: 10px 3px;
      min-height: 100%;
      max-width: 100%;
      background-repeat: no-repeat;
      flex-shrink: 0;
    }
  `
};
