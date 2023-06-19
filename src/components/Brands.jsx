import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Brands = ({copyright}) => {
  return (
    <div className='mt-[72px] mx-auto w-[204px] h-[71px] flex flex-col justify-between items-center mb-[43px]'>
      <div className='flex justify-evenly items-center w-[120px]'>
      <a href='https://www.facebook.com/' target='_blank' className='w-[32px] h-[32px] border border-blue-extend-50 rounded-full flex justify-center items-center group hover:bg-blue-extend-500'>
        <span><FontAwesomeIcon icon={faFacebookF} className='text-blue-extend-500 group-hover:text-white'/></span>
      </a>
      <a href='https://twitter.com/' target='_blank' className='w-[32px] h-[32px] border border-blue-extend-50 rounded-full flex justify-center items-center group hover:bg-blue-extend-500'>
        <span><FontAwesomeIcon icon={faTwitter} className='text-blue-extend-500 group-hover:text-white'/></span>
      </a>
      <a href='https://www.instagram.com/' target='_blank' className='w-[32px] h-[32px] border border-blue-extend-50 rounded-full flex justify-center items-center group hover:bg-blue-extend-500'>
        <span><FontAwesomeIcon icon={faInstagram} className='text-blue-extend-500 group-hover:text-white'/></span>
      </a>
      </div>
      <p className='text-center text-gray text-xs'>{copyright}</p>
    </div>
  )
}

export default Brands