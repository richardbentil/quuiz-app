import React from 'react'

interface QuestionProp {
  question: {id: number, question: string}
}

function Question({question: {id, question}}: QuestionProp) {
  return (
    <>
     <div>
              {id}
              {question}
            </div>
    </>
  )
}

export default Question