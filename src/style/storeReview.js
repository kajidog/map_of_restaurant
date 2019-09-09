import styled from "styled-components";

export const styles = {
  ReviewFlame: styled.div`

  width: 90%;
  margin: 10px auto;
    & > .coments{
      width: 100%;
      padding:10px 8%;
    }
  `,


 SendButton: styled.button`
   & {
     position: relative;
   display: block;
   margin: 20px auto 10px;
   padding: 10px 40px;
   background: #fff;
   border: 1px solid #00000069;
 }
   &:hover {
   background: #000;
   color: #fff;
 }
   &:active {
   top: 2px;
 }  `,
  ComentFlame: styled.div`
    padding: 10px;
    &  .yellow{
      color: #f9783a;
    }
    & .gray{
      color: rgb(139, 139, 142);
    }
    & > span{
      margin-right: 30px;
    }
    & > div{

    }
    & .date{
      padding-left: 10px;
      color: rgb(173, 173, 173);
    }
  `,
  ComentFormFlame: styled.div`
  & table {
    width: 100%;
    & tr{
      margin-top: 20px;

      & th{
        width: 40%;
      }
      & td{
        & > span{
          margin: 20px 0;
        }
        width: 60%;
        & div{
          position: relative;
          height: 80px;
          margin: 20px 0;
        }
      }
    }
  }
  & span{
        cursor: pointer;
  }

  & table textarea{
    position: absolute;
  top: 10px;
  width: 100%;
  left: -10%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  -webkit-transform: scale(0.6);
  -ms-transform: scale(0.6);
  transform: scale(.8);
  border: 1px solid rgb(217, 217, 217);
  }
  & table tr td div{
  }
  `,
};
export const Ster = styled.span`
${props => {
  if(props.i <= props.sum ) {return`
    color: #f9783a;
  `}else{
    return`color: rgb(180, 180, 180);`
  }
}}
`
