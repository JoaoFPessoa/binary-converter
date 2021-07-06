import React from 'react'

const Result = ({ inputBin, decNum }) => {
  return (
    <div className="display">
      {!inputBin.binary ? (
        <p className="info">
          Aguardando número válido
        </p>
      ) : (
        <p>{decNum}</p>
      )}
    </div>
  )
}

export default Result