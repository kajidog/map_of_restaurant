import styled from "styled-components";

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
  background-color: #FFFFFF;
  border:1px solid #999999;
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
  color: #FFFFFF;
  }
`
