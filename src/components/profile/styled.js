import styled from 'styled-components';

export const BoxProfile = styled.div`
  display: flex;
`;

export const ImagemPerfil = styled.img`
    width: 220px;
    height: 240px;
    margin: 8px;
    -webkit-box-shadow: -1px 3px 7px 10px rgba(0,0,0,0.51); 
 box-shadow: -1px 3px 7px 10px rgba(0,0,0,0.51);
`; 

export const BoxInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
   
    h4{
      margin:  6px;
    }
    ul{
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
        li{
          margin: 0;
          display: inline-block;
          padding-right: 5px;
        }
    } 
`; 

export const Table = styled.table`
   display: flex;
   flex-direction: column;
   padding: 6px;

    td{
      padding: 8px;
      text-align: start;
    }
`;

export const TextProfile = styled.h4`
   font-size: 16px;

   a{
     cursor: pointer;
     color: #000;
    text-decoration: none;
   }
`;

export const ContainerSearch = styled.div`
    display: flex;
    align-items:flex-start;
    justify-content: flex-start;
    margin-bottom: 4px;
`;

export const InputSearch = styled.input`
    width: 90%;
`;

export const ButtonSucces = styled.button`
      background-color: blue;
      color: #fff;
      width: 80px;
      font-size: 16px;
      border-radius: 4px;
      border: none;
      margin-left: 8px;
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