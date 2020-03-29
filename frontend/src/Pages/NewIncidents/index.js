import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [value, setValue] = useState('');

   const history = useHistory();

   const ongId = localStorage.getItem('ongId');

   async function handleNewIncident(e) {
      e.preventDefault();

      const data = {
         title, 
         description,
         value
      }

      try {
         await api.post('incidents', data, {
            headers: {
               Authorization: ongId
            }
         })

         history.push('/profile');
      } catch(error) {
         alert('Error registering incident, please try again');
      }
   }

   return (
      <div className="new-incident-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero"/>

               <h1>Register new incident</h1>
               <p>Describe the detailed incident to find a hero to solve this.</p>

               <Link className="back-link" to="/profile">
                  <FiArrowLeft size={16} />
                  Go to home
               </Link>            
            </section>

            <form onSubmit={handleNewIncident}>
               <input 
                  placeholder="Incident Title" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
               />
               <textarea 
                  placeholder="Description" 
                  value={description}
                  onChange={e => setDescription(e.target.value)}
               />

               <input 
                  placeholder="Value in USD" 
                  value={value}
                  onChange={e => setValue(e.target.value)}
               />
               
               <button className="button" type="submit">Register</button>
            </form>
         </div>
      </div>
   )
}