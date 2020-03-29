import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'


export default function Register(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [whatsapp,setWhatsapp]=useState('');
    const [city,setCity]=useState('');
    const [uf,setUf]=useState('');

    const history= useHistory();


    async function handleRegister(event){
        event.preventDefault();
        
        const data={
            name,
            email,
            whatsapp,
            city,
            uf
        };

        const response = await api.post('ongs', data)

        alert(`Your ID acess: ${response.data.id}`)

        history.push('/');

        try{
            const response = await api.post('ongs', data)

            alert(`Your ID acess: ${response.data.id}`)
        }catch(err){
            alert('Sign Up error, try again')
        }
        
    }



    return(
        <div className="register-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero"/>
                    <h1>Sign Up</h1>
                    <p>Sign Up, enter the platform and help people find the incidents of your ONG.</p>
                    <Link className='back-link'to="/">
                        <FiArrowLeft size={16} color='#E02041'/>
                        Back to Log In
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Name of ONG"
                        value={name}
                        onChange={e=>setName(e.target.value)}    
                    />

                    <input type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}    
                    />
                    <input
                        placeholder="Whatsapp (Ex:+1 351-211-1042)"
                        value={whatsapp}
                        onChange={e=>setWhatsapp(e.target.value)}    
                    />

                    <div className="input-group">
                        <input 
                            placeholder="City"
                            value = {city}
                            onChange={e=>setCity(e.target.value)} 
                    
                        />
                        <input 
                            placeholder="State (Ex:NY)"
                            style={{width: 160}}
                            value={uf}
                            onChange={e=>setUf(e.target.value)}             
                        />
                    </div>           
                    <button className='button' type="submit">Sign Up</button>
                </form>    
            </div>
         </div>

    );
}