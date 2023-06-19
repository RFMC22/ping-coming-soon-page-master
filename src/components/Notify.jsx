import { useState } from 'react'
import Error from './Error';
import dashboard from '../assets/illustration-dashboard.png'
import logo from '../assets/logo.svg'

const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const Notify = ({title,title2,subtitle,button,placeholder}) => {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === ''){
      setMensaje('Empty field, please enter email');
    }else if(!emailRegex.test(email)){
      setMensaje('Please provide a valid email address')
    }
  };
  return (
    <div className='pt-[80px]'>
      <img src={logo} alt="logo PING." className='mx-auto md:h-[39px] h-[24px]'/>
      <h1 className='md:text-5xl font-normal text-gray text-center md:mt-[40px] md:h-[60px] md:leading-[60px] mt-[32px] text-[22px]'>{title}<span className='font-bold text-blue-extend-900'> {title2}</span></h1>
      <p className='text-center mt-[16px] text-blue-extend-900 font-light md:text-xl h-[24px] leading-[24px] text-[12px]'>{subtitle}</p>
      <form className='md:w-[637px] mx-auto md:mt-[40px] flex justify-between flex-wrap md:h-[62px] mt-[32px] w-[281px]' onSubmit={handleSubmit}>
        <div className='w-full md:w-[421px]'>
        <input
          onChange={e=>{setEmail(e.target.value); setMensaje('')}}
          value={email}
          type="email"
          placeholder={placeholder}
          className={`outline-none w-full md:h-[56px] h-[40px] rounded-full border ${mensaje ? 'border-light-red placeholder-light-red' : 'border-blue-extend-100 placeholder-blue-extend-100'} pl-[30px]`}
        />
        {mensaje && <Error mensaje={mensaje}/>}
        </div>
        <button type="submit" className='md:w-[200px] w-full md:h-[56px] h-[40px] bg-blue-extend-500 text-white rounded-full font-semibold md:mt-[0] mt-[10px] shadow-button hover:bg-blue-extend-10'>{button}</button>
      </form>
      <img className='md:w-[640px] w-[320px] md:h-[383px] mx-auto md:mt-[94px] mt-[40px]' src={dashboard} alt="representacion dashboard" />
    </div>
  )
}

export default Notify