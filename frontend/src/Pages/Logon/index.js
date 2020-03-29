import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
   const [id, setId] = useState('')
   const history = useHistory()

   async function handleLogin(event) {
      event.preventDefault()

      try {
         const response = await api.post('sessions', { id })

         localStorage.setItem('ongId', id)
         localStorage.setItem('ongName', response.data.name)

         history.push('/profile')
      } catch(error) {
         alert(error)
      }
   }

   return (
      <div className="logon-container">
         <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form onSubmit={handleLogin}>
               <h1>Be The Hero </h1>

               <input 
                  placeholder="Your ID" 
                  value={id}
                  onChange={e => setId(e.target.value)}
               />
               <button className="button" type="submit">Log In</button>

               <Link className="back-link" to="/register">
                  <FiLogIn size={16} />
                  Sign Up
               </Link>
            </form>
         </section>

         <img src={heroesImg} alt="Heroes" />         
      </div>
   )
}