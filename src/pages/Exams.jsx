import React from 'react'
import NoInfo from "../assets/no-info.png";


const Exams = () => {
  return (
    <div className='w-full'>
        <div className='flex items-center justify-center'>
            <img src={NoInfo} alt="No Info" />
        </div>
        <br />
        <h2 className='mt-5 text-center text-2xl'>Qurilish ketmoqta</h2>
    </div>
  )
}

export default Exams