import React from 'react'

const Errors = () => {
  return (
      <div
          style={{
              display: 'flex',
              minHeight: '100vh',
              justifyContent: 'center',
              alignItems:'center'
          }}
      >
          <h2 style={{ color: 'red', fontSize: '2rem' }}>
              Something wrong, try again
          </h2>
      </div>
  )
}

export default Errors