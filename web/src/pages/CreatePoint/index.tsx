import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';

import './style.css';
import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        });
    }, []);


    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />


                <Link to="/">
                    <FiArrowLeft/>
                    Voltar para home
                </Link>
            </header>

            <form >
                <h1>Cadastro do <br /> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="email" >Nome da entidade</label>
                        <input 
                        type="text"
                        name="name"
                        id="name"
                         />
                    </div>

                    <div className="field-group">
                        <div className="field">
                             <label htmlFor="email" >Email</label>
                            <input 
                            type="email"
                            name="email"
                            id="email"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="whatsapp" >Whatsapp</label>
                            <input 
                            type="text"
                            name="whatsapp"
                            id="whatsapp"
                            />
                    </div>

                    </div>


                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endere??o</h2>
                        <span>Selecione o endere??o no mapa</span>
                    </legend>

                    <MapContainer center={[-8.8243877, 13.2533059]} zoom={15}>
                        <TileLayer 
                          attribution='&amp;copy <a href="http://osm.org/copyright">OpenSreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[-8.8243877, 13.2533059]} />
                    </MapContainer>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf" >Estado (UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">
                                    Selecione uma UF
                                </option>
                            </select>
                         </div>
                         <div className="field">
                            <label htmlFor="city" >Cidade</label>
                            <select name="city" id="city">
                                <option value="0">
                                    Selecione uma cidade
                                </option>
                            </select>
                        </div>
                        
                    </div>

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>??tens de coleta</h2>
                        <span>Selecione um ou mais ??tens abaxio</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                        <li>
                            <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
                            <span>??leo de cozinha</span>
                        </li>

                        ))}
                        
                    </ul>
                </fieldset>

                <button type="submit">
                    Cadastrar um ponto de coleta
                </button>
            </form>
        </div>
    )
};

export default CreatePoint;