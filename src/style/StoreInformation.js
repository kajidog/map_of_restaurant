import styled from "styled-components";
export const Descriptionolumn = styled.div`
  border: 1px solid;
  padding: 10px 5%;
  position: relative;
  line-height: 1.7em;
  font-size: 15px;
  max-width: 600px;
  margin: 30px auto 70px;
  &:before {
    position: absolute;
    content: "PR文章";
    padding: 0 15px;
    top: -12px;
    left: 0;
    background-color: white;
    right: 0;
    margin: 0 auto;
    width: 20%;
    min-width: 60px;
    text-align: center;
    font-size: 1rem;
  }
`;
export const StoreinTitole = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  text-align: center;
  ${props => {
    switch (props.mode) {
      case "mini":
        switch (props.state) {
          case "hidden":
            return `
        border-bottom:2px solid #969696;
        cursor: pointer;
`;
          case "display":
            return `
        line-height: calc(8vh - 18px);
        border-bottom:2px solid #969696;
        cursor: pointer;

        `;
          default:
        }
        return ``;
      case "normal":
        return `
        line-height: 40px;
`;
      default:
    }
  }}
`;
export const StoreinBody = styled.div`
  background-color: white;
  margin: 0 auto;
  ${props => {
    switch (props.mode) {
      case "mini":
        switch (props.state) {
          case "hidden":
            return `
        padding: 30px 5%;

        overflow-y: hidden;
        overflow-x: hidden;
        height: calc(72vh);`;
          case "display":
            return `
        padding: 30px 5%;

        overflow-y: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        height: calc(100vh - 250px);
        `;
          default:
        }
        return ``;
      case "normal":
        return `
      padding: 30px 60px;
`;
      default:
    }
  }}
`;

export const StoreInfoCard = styled.div`
  background-color:white;
  transition: 0.5s ease-in-out;



}
  ${props => {
    switch (props.mode) {
      case "mini":
        switch (props.state) {
          case "hidden":
            return `
        border-top: 2px solid #5b5b5b;

        width: 100%;
        padding: 2px;
        margin: 0px auto;

`;
          case "display":
            return `
        border-radius: .6rem;
          box-shadow: 3px 3px 10px 0px #4a4a4a5e, -3px -3px 10px 0px #4a4a4a5e;
          padding: 2px;
          margin-top: 40px;
          border: 2px solid #969696;
          width: 97%;
          margin: 45px auto 0;
        `;
          default:
        }
        return ``;
      case "normal":
        return `
      width: 100%;

      `;
      default:
    }
  }}
`;

export const StoreInformationFlame = styled.div`
  position: fixed;
  transition: 0.4s ease-in-out;
  margin: 0 auto;
  & .kage-info {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  & > p {
    padding-top: 30%;
    text-align: center;
    color: rgb(150, 150, 150);
  }
  ${props => {
    switch (props.mode) {
      case "mini":
        switch (props.state) {
          case "hidden":
            return `
                width: 100%;
                top: calc(100vh - 4rem);
                left: 0;
                right: 0;
                background-color: rgba(256, 256, 256, .5);
                `;
          case "display":
            return `
                width: 100%;
                top: 60px;
                left: 0;
                right: 0;
                height: calc(100% - 60px);
                min-height: 40px;
                overflow-y: scroll;
                background-color: rgba(164, 164, 164, .5);
                -webkit-overflow-scrolling: touch;
              `;
          default:
            return `display: none`;
        }

      case "normal":
        return `
          width: 60%;
          top: 60px;
          left: 40%;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          height: 90%;
        `;
      default:
        return ``;
    }
  }}
`;
export const Td = styled.td`
  border: solid 1px rgba(129, 129, 129, 0.42);
  padding: 10px;
  width: 60%;
`;
export const Th = styled.th`
  border: solid 1px rgba(129, 129, 129, 0.42);
  padding: 10px;
  width: 30%;
`;
export const Tr = styled.tr``;
export const Table = styled.table`
  border: solid 1px rgba(129, 129, 129, 0.42);
  border-collapse: collapse;
`;
export const Img = styled.div`
  background-image: url(${props => props.url});
  width: 100%;
  margin: 10px;
  background-size: cover;
`;
Img.defaultProps = {
  width: "auto"
};
export const BackButton = styled.p`
  background-color: #ffffff;
  border: 1px solid #999999;
  border-radius: 2px;
  color: #333333;
  display: block;
  font-size: 14px;
  padding: 14px;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  width: 150px;

  &:hover {
    background-color: #999999;
    color: #ffffff;
  }
`;
export const styles = {
  StoreTable: styled.table`
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
    & caption {
      letter-spacing: 1.5px;
      padding: 15px;
      font-weight: bold;
      border-radius: 30px;
      max-width: 570px;
    }
    & th {
      width: 30%;
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      padding: 15px;
      border-top: 1px solid ${props => props.borderColor};
      border-bottom: 1px solid ${props => props.borderColor};
      min-width: 90px;
    }
    & td {
      font-size: 13px;
      border-top: 1px solid ${props => props.borderColor};
      border-bottom: 1px solid ${props => props.borderColor};
      max-width: 400px;
    }
    & > tbody > tr > td > p {
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      border-left: 1px solid rgba(164, 164, 164, 0.74);
      padding: 0 20px;
      max-width: 400px;
    }
    & > tbody > tr > td > div {
      border-left: 1px solid rgba(164, 164, 164, 0.74);
      padding: 0 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 100%;
      max-width: 400px;
    }
    & a {
      word-break: break-all;
    }
  `
};
