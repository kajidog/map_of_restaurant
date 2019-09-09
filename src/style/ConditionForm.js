import styled from "styled-components";

export const Nav = styled.nav`
  background: rgba(201, 201, 201, 0);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1));
  border-bottom: 5px solid #37a29b;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
`;
export const ConditionsButton = styled.p`
  padding: 8px 20px;
  margin: 0 10px 0 0;
  font-size: 12px;

  background: #f2f2f2;
  border: 2px solid #000;
  transition: all 0.3s ease;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    z-index: -1;
    width: 25%;
    top: 50%;
    height: 2px;
    background: #000;
    transition: all 0.3s ease;
  }
  &:before {
    left: ${props => props.beforeLeft};
  }
  &:after {
    right: ${props => props.beforeRight};
  }
  &:hover {
    background: #000;
    color: #fff;
    cursor: pointer;
  }
  &:hover:before {
    left: 3%;
  }
  &:hover:after {
    right: 10%;
  }
`;
ConditionsButton.defaultProps = {
  beforeLeft: "-5px",
  beforeRight: "5px"
};

export const Heading = styled.h2`
  margin-top: 0;
  color: rgba(246, 95, 117, 1);
`;
export const SearchBtn = styled.p`
  position: fixed;
  top: 92vh;
  left: 40%;
  text-align: center;
  background-color: white;
  border: 2px solid rgb(250, 87, 87);
  color: rgb(255, 75, 75);
  width: 20%;
  border-radius: 1.9rem;
  font-size: 20px;
  margin: 5px auto;
  padding: 5px;
`;
export const ShowandHide = styled.div`
  margin: 20px auto;
  width: 150px;
  padding: 10px;

  text-align: center;
  border: 2px solid #000;
  z-index: 1;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #000;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
`;
export const InputForm = styled.input`
  height: 100%;
  padding: 0px 20px;
  font-size: 16px;
  transform: scale(0.8);

  background-color: rgba(249, 249, 249, 0);
  border: 0px;
`;
export const Ul = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10px;
  flex-wrap: nowrap;
  white-space: nowrap;
`;
export const ConditionList = styled.p`
  color: rgb(242, 137, 70);
  padding: ${props => props.padding};
  cursor: default;
  &:hover {
    background-color: rgba(237, 237, 237, 0.27);
  }
`;
ConditionList.defaultProps = {
  padding: "0 0 0 20px"
};

export const Li = styled.div`
  display: block;
  position: relative;
`;
export const TextBox1 = styled.p`
  padding: 8px 20px;
  margin: 0;
  font-size: 12px;
  border: 2px solid #000;
  background: #000;
  color: #fff;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    z-index: -1;
    width: 25%;
    top: 50%;
    height: 2px;
    background: #000;
    transition: all 0.3s ease;
  }

  &:before {
    left: 3px;
  }
  &:after {
    right: 5px;
  }
  &:hover {
    cursor: pointer;
    background: #f2f2f2;
    color: #000;
  }
  &:hover:before {
    left: -5%;
  }
  &:hover:after {
    right: 10%;
  }
`;
export const Select = styled.select`
  white-space: nowrap;
  height: 39px;
  text-align: center;
  margin-right: 10px;
  padding: 0 10px;
  border-radius: 0px !important;

  background: #f2f2f2;
  border: 2px solid #000;
  transition: all 0.3s ease;
  &:hover {
    background: #000;
    color: #fff;
  }
  &:focus {
    outline: 0;
  }
`;
Select.defaultProps = {
  backgroundColor: "white"
};

export const Option = styled.option`
  background-color:white &:active {
    background-color: red;
  }
`;
