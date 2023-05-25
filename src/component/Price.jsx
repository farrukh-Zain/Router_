import React from 'react'
import { Outlet } from 'react-router-dom'

function Price() {
  return (
    <>
    <div> Price Starts</div>

        <Outlet/>

      <div> Price Ends</div>
      </>
  )
}

export default Price
