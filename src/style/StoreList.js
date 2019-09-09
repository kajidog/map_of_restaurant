import styled, { keyframes } from "styled-components";

export const LineElement = styled.div`
  border-collapse: collapse;
  width:80%;
  padding:10px 0;
  border-radius: 0.2rem
  margin:0 auto;
  text-align:center
  &:hover{
    background-color:rgba(232, 237, 255, 0.4);
    cursor : pointer;
  }
`;
export const SearchCategoryListFlame = styled.div`
width: 100%;
background-color: white;
height: calc(100vh - 84px);
overflow-y:scroll;
-webkit-overflow-scrolling: touch;

max-width: 500px;
margin: 10px auto;
border: 2px solid;
border-radius: .2rem;
box-shadow:
  3px 3px 10px 4px rgba(170, 170, 170, 0.6), -3px -3px 10px 4px rgba(170, 170, 170, 0.6);
}}

`;
export const LoadingFlame = styled.div`
  background-color: #a1c2fa;
  height: 0.25rem;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;
const animateMove = keyframes`
0% {
    left: -60%;
}
100% {
    left: 100%;
}
`;
const animateWidth = keyframes`{
0% {
    width: 60%;
}

10% {
    width: 60%;
}
66% {
    width: 1%;
}
100% {
    width: 60%;
}
}
`;
export const Bear1 = styled.div`
  height: 100%;
  background-color: #4285f4;
  animation: ${animateMove} 1400ms infinite, ${animateWidth} 1300ms infinite;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: right top;
  left: -60%;
  position: absolute;
  @keyframes hrLoadingIndicatorMove {
  }
`;
export const Ber2 = styled.div`
  background-color: #4285f4;
  height: 100%;
  animation: ${animateMove} 1400ms infinite cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: 700ms;
  left: -60%;
  position: absolute;
  width: 60%;
`;
export const List = styled.div`
  padding: 10px;
  margin: 25px auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 3px 3px 10px 2px rgba(170, 170, 170, 0.1);
  border-radius: 0.65rem;
`;
export const Lists = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`;
export const StoreListFlame = styled.div`
  transition: 0.5s ease-in-out;

  ${props => {
    switch (props.mode) {
      case "mini":
        return `
        position: absolute;
        top: 65px;
        left: 0;
        right: 0;
        width: 100%;

      `;
      case "normal":
        return `
      position: fixed;
      width: 40%;
      top: 65px;
      left: 0;
      bottom: 0;
      border-right: 2px solid rgb(242, 242, 242);

`;
      default:
        return `
        display: none;
      `;
    }
  }}
`;
export const Img = styled.div`
  background-image: url(${props => props.url});
  width: ${props => props.width};
  height: ${props => props.width};
  margin: 10px;
  padding: 0 30px;
  background-size: cover;
`;
Img.defaultProps = {
  height: "auto"
};
export const StoreName = styled.h2`
  font-size:${props => props.size}
  border-left:5px solid rgba(255, 160, 82, 1);
  margin:10px 10px;
  display:block;
  padding:3px 10px;
`;
Img.defaultProps = {
  height: "auto"
};

export const DetailsButton = styled.button`
  border: none;
  display: block;
  margin: 10px auto;
  background-color: white;
  font-size: 18px;
  color: rgba(55, 159, 255, 1);
`;
export const Button = styled.button`
  background-color: white;
  border-radius: 0.9rem;
  margin: 0 10px 10px 0;
  border: 1px solid rgb(255, 161, 62);
  color: rgb(255, 161, 62);
`;
