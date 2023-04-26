import React from 'react'

interface FooterProps {
    count: number, questionsCount: number
}

function Footer({count, questionsCount}: FooterProps) {
  return (
    <>
     <p className='text-white-50 text-end my-3'>
          You have answered {count} out of
         <span className='ms-1'>{questionsCount}</span>
        </p>
    </>
  )
}

export default Footer