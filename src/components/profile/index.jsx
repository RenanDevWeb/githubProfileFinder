import React, {useState}from 'react';
import {BoxProfile, ImagemPerfil, BoxInformacoes, Table,TextProfile, InputSearch, ButtonSucces,
   ContainerSearch, ContainerRepositories, CardRepositories, Card} from './styled'
import {Api} from '../../api/api'


function Profile() {
  const [userInformations, setUserInformations] = useState('')
  const [input, setInput] = useState('')
  const [gitUser, setGitUser] = useState('')
  const [repositories,setRepositories] = useState([])

  async function getRepositories(gitUser){
         await Api.get(`/users/${gitUser}/repos`)
           .then((response) => setRepositories(response.data))
           .catch(err => console.log(err))
  }   



  function handleInput(e){
    e.preventDefault();
    setInput(e.target.value)
  }

  function search(){
     setGitUser(input)
     getDados(input)
     getRepositories(input)
  }

  async function getDados(gituser){
    await Api.get(`users/${gitUser}` ) 
    .then(response => setUserInformations(response.data))
  }



  return (
  <>
  <ContainerSearch >
    <InputSearch type="text" onChange={(e) => handleInput(e)} />
    <ButtonSucces onClick={() => search()}>Buscar</ButtonSucces>
  </ContainerSearch>
    <BoxProfile>
       <ImagemPerfil src={`https://github.com/${gitUser}.png`} alt="imagem Perfil"/>
       <BoxInformacoes>
                 <h1>{userInformations.login}</h1>
                 <TextProfile>Name: {userInformations.login}</TextProfile>
                 <TextProfile>Company: {userInformations.company}</TextProfile>
                 <TextProfile>Blog: <a href={userInformations.blog}> {userInformations.blog}</a></TextProfile>
              
           <Table>
             <thead>
                 <tr>
                   <td>Followers</td>
                   <td>Following</td>
                   <td>Gist</td>
                   <td>Repositories</td>
                 </tr>
                <tbody>
                  <tr>
                    <td>{userInformations.followers}</td>
                    <td>{userInformations.following}</td>
                    <td>{userInformations.public_gists}</td>
                    <td>{userInformations.public_repos}</td>
                  </tr>
                </tbody>
             </thead>
          </Table>

       </BoxInformacoes>
    </BoxProfile>

<ContainerRepositories>
    <h2>Repositories</h2>
      <CardRepositories>
       {repositories.map((item) => (
      <Card>
        <h2>{item.name}</h2>
        <h2>{item.created_at}</h2>
        <h2>{item.git_url}</h2>
        <h2>{item.language}</h2>
      </Card>
        ))}
        
        
      </CardRepositories>
  </ContainerRepositories>


</>
  );
}

export default Profile;