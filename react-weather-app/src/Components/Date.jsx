import React from 'react'

function Date() {

    let today = new Date();
    const date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate();

  return (
    <div className='weather-Date'>
        {date} <br />
    </div>
  )
}

export default Date