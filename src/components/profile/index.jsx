import React, {useState}from 'react';
import {BoxProfile, ImagemPerfil, BoxInformacoes, Table,TextProfile, InputSearch, ButtonSucces,
   ContainerSearch, ContainerRepositories, HeaderInformation, BoxInformacoesProfile,BoxLocations, CardRepositories, Card} from './styled'
   import {FaSearch, FaTwitter,FaLink} from 'react-icons/fa'
   import {MdLocationOn} from 'react-icons/md'

   import {Api} from '../../api/api'


function Profile() {
  const [userInformations, setUserInformations] = useState('')
  const [input, setInput] = useState('')
  const [imagemPerfil, setImagemPerfil] = useState('')
  const [gitUser, setGitUser] = useState('')
  const [repositories,setRepositories] = useState([])

  function handleInput(e){
    e.preventDefault();
    let inputValue  = e.target.value
    setInput(inputValue)
  }


  async function getRepositories(){
      try {
        let gitUser =  input
        const {data} = await Api.get(`/users/${gitUser}/repos`)
        setRepositories(data)
      } catch (error) {
        
      }       
  }   


  async function search(input){
     await setGitUser()
     await getDados()
     await getRepositories()
  }

  async function getDados(){
    try {
      let gitUser =  input
      setImagemPerfil(input)
      const {data} = await Api.get(`users/${gitUser}`)
      setUserInformations(data)
    } catch (error) {
      console.log(error)
    }
  }



  return (
  <>
  <ContainerSearch >
    <FaSearch className="icon" />
    <InputSearch type="text" onChange={(e) => handleInput(e)} placeholder="search for a user"/>
    <ButtonSucces onClick={() => search()}>Buscar</ButtonSucces>
  </ContainerSearch>
    <BoxProfile>
       <ImagemPerfil src={`https://github.com/${imagemPerfil}.png`} alt=""/>
       <BoxInformacoes>
              <HeaderInformation>
                 <h1>{userInformations.login}</h1>
                  <h2>{userInformations.created_at}</h2>
              </HeaderInformation>
                 <h2>{userInformations.bio}</h2>
                  <BoxInformacoesProfile>
                  <Table>
             <thead>
                 <tr>
                  <td>Repositories</td>
                   <td>Followers</td>
                   <td>Following</td>
                 </tr>
                <tbody>
                  <tr>
                    <td>{userInformations.public_repos}</td>
                    <td>{userInformations.followers}</td>
                    <td>{userInformations.following}</td>
                  </tr>
                </tbody>
             </thead>
          </Table>
                  </BoxInformacoesProfile>
                 
                 <BoxLocations>
                   <div>
                   <TextProfile> <MdLocationOn /> {userInformations.location}</TextProfile>
                   <TextProfile> <FaLink /> {userInformations.company}</TextProfile>
                   <TextProfile> <FaTwitter/> {userInformations.twitter_username}</TextProfile>
                   </div>
                </BoxLocations>
                 
              
           

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