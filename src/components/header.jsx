import { useState } from 'react';
import todoLogo from '../assets/logo.svg';
import './header.css'
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header({ onAddTask }){

    const [title, setTitle] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

    return(
        <header className='headerTopo'>
            <img src={todoLogo} alt="logo" className='logo'/>

            <form onSubmit={handleSubmit} className='form'>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa' 
                    value={title} 
                    onChange={onChangeTitle} />

                <button className='salvar'>
                    Salvar 
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}