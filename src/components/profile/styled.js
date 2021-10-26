import styled from 'styled-components';

export const BoxProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #22272E;
  margin: 0 auto;
  width: 52%;
  border-radius: 10px;
  margin-top: 40px;
`;

export const ImagemPerfil = styled.img`
    width: 160px;
    height: 160px;
    margin-left: 20px;
    border-radius: 50%;
`; 

export const BoxInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 40px;
    h2{
      color:#fff;
      font-size: 12px;
      
    }
`; 

export const HeaderInformation = styled.div`
    display: flex;
    
    justify-content: space-between;
    align-items: center ;
    h1{
      color:#fff;
    }
    h2{
      color:#fff;
      font-size: 12px;
      margin-left: 20px;
    }
`;  
export const BoxInformacoesProfile = styled.div`
     background-color: #1C1C1C;
     border-radius: 10px;
     padding: 10px;
     margin: 10px 0;



`;

export const Table = styled.table`
   display: flex;
   flex-direction: column;
   padding: 6px;
   color:#fff;

    td{
      padding: 8px;
      text-align: center;
      font-weight: bold;
      font-size: 18px;
    }
`;


export const  BoxLocations = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;

   div{
     display: flex;
     justify-content: flex-start;
     align-items: flex-start;
   }
`;

export const TextProfile = styled.h4`
   font-size: 14px;
   color: #fff;
   margin-right: 6px;
   a{
     cursor: pointer;
     color: #000;
    text-decoration: none;
   }
`;

export const ContainerSearch = styled.div`
    background-color: #22272E;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    margin-bottom: 4px;
    width: 50%;
    margin: 0 auto;
    padding: 14px;
    border-radius: 10px;
`;

export const InputSearch = styled.input`
    width: 100%;
    padding: 8px;
    border: 0 solid #22272E;
    outline: 0 !important;
    outline-width: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 10px;
    &:focus{
      outline: none;
      border:0;
    }
`;

export const ButtonSucces = styled.button`
      background-color: blue;
      color: #fff;
      width: 80px;
      font-size: 16px;
      padding: 8px;
      border-radius: 4px;
      border: none;
      margin-left: 8px;
      background-color: #347D39;
      &:hover{
        background-color: #fff;
        color:#347D39;
      }
      `; 
export const ContainerRepositories = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`;

export const CardRepositories = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
border: 1px solid black;
`;


export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
margin: 6px;
border: 1px solid black;
h2{
  color: #000;
  padding: 0;
  font-size: 16px;
}
`;