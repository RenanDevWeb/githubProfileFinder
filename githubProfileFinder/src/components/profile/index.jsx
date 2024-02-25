import React, { useState } from 'react'
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { SlUserFollow, SlUserFollowing  } from "react-icons/sl";
import {MdLocationOn} from 'react-icons/md'
import { FaClone } from "react-icons/fa";
import Swal from 'sweetalert2'
import {Api} from '../../api/api'

import './styles.css'
export default function Profile() {
  const [userInformations, setUserInformations] = useState('')
  const [input,setInput] = useState('')
  const [imagemPerfil,setImagemPerfil] = useState('')
  const [repositories,setRepositories] = useState([])
  const [clipBoardText,setClipBoardText] = useState('')


  function handleInput(e){
    e.preventDefault()
    let inputValue = e.target.value
    setInput(inputValue)
  }




 async function getDataFromUser(){
  try {
     let gitUser = input
     setImagemPerfil(input)
     const {data} = await Api.get(`/users/${gitUser}`)
     setUserInformations(data)
  } catch (error) {
    throw new Error
  }
 }
 
 
  async function getRepositories(){
  try {
    let gitUser = input
    const {data} = await Api.get(`users/${gitUser}/repos`)
    setRepositories(data) 
  } catch (error) {
    throw new Error
  }
  
 }

  async function search(input){
   await getDataFromUser(input)
   await getRepositories(input)
  }


function copyToClipboard(textBoard){
    var clipboard = clipBoardText
if (clipboard == undefined) {
  Swal.fire({
    title: "Não foi possivel copiar",
    icon: "error",
  });
} else {
    navigator.clipboard.writeText(textBoard).then(function() {
      Swal.fire({
        title: "Copiado para a area de transferencia!",
        icon: "success"
      });
    }, function() {
      Swal.fire({
        title: "Não foi possivel copiar",
        icon: "error",
      });
    });
}

    


  }




  return (
    
    <>
  <div className='container-search'>
    <input className="inputSearch" type="text" onChange={(e) => handleInput(e)} placeholder="search for a user"/>
    <button className='button-sucess' onClick={() => search()}>Buscar</button>
  </div>


    

  <div className='CardBoxProfile'>
    <img src={`https://github.com/${imagemPerfil}.png`}  alt="Imagem Perfil" /> 
    <div className='boxInformacoes'>
        <div className='headerInformacoes'>
                        
                   <h1>{userInformations.login}</h1>
                   <h2>{userInformations.bio}</h2>
        </div>
        
         <div className='boxInformacoesProfile'>
                  <h3> <a href={`https://github.com/${userInformations.login}?tab=repositories`}><RiGitRepositoryCommitsLine className='icon' /> {userInformations.public_repos} </a> </h3>
                   <h3><a href={`https://github.com/${userInformations.login}?tab=followers`}><SlUserFollow  className='icon'/>{userInformations.followers}</a></h3>
                   <h3><a href={`https://github.com/${userInformations.login}?tab=following`}><SlUserFollowing className='icon' />{userInformations.following}</a></h3>
                   <h3> <MdLocationOn /> {userInformations.location}</h3>
         </div>
    </div>
  </div>
     
     <div className="containerRepos">
      {repositories.map((item)=> (
      <div className="card" key={item.id}>
          <h2><a href={item.html_url}> {item.name}</a></h2>
          <h2>{item.description}</h2>
        
        <div className="box">
          <h2>{item.language}</h2> 
          <h2> <a onClick={() => copyToClipboard(item.clone_url)}> <FaClone /> Clone </a> </h2>
        </div>
           
        </div>
      ))}
     </div>
               
                  
       



    </>
  )
}
