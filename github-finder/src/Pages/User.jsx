import React from 'react'
import {useEffect, useContext} from "react"
import GithubContext from '../Context/github/GithubContext'

function User() {
  const {getUser,user }= useContext(GithubContext)

  useEffect(()=>{
     getUser()
  },[])
  return (

    <div>USER</div>
  )
}

export default User