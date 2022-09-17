import React from 'react'
import ReactCountryFlag from 'react-country-flag'

export const Each = ({data}) => {

  return (
    <>
        <div className='box'>
            <h3>{data.description}</h3>
            <p>{data.code}</p>
            <p>rate: {data.rate}</p>
            <p>rate-float: {data.rate_float}</p>

        </div>
    </>
  )
}
