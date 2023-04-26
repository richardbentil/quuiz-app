import React from 'react'

interface FooterProps {
    count: number, questionsCount: number
}

function Footer({count, questionsCount}: FooterProps) {
  return (
    <>
     <p>
          You have answered {count} out of
          {questionsCount}
        </p>
    </>
  )
}

export default Footer