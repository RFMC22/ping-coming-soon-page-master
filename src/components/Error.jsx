const Error = ({mensaje}) => {
  return (
    <p className="text-light-red text-[12px] md:pl-[30px] mt-[6px] pl-[0] text-center md:text-start">
      {mensaje}
    </p>
  )
}

export default Error