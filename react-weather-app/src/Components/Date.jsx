import React from 'react'

function Date() {

    let today = new Date();
    const date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate();

  return (
    <div>

        {date}
    </div>
  )
}

export default Date