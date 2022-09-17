import React, { useEffect, useState } from 'react'
import { Each } from './Each'

export const Container = () => {
    const COINTURL = "https://api.coindesk.com/v1/bpi/currentprice.json"
    const [data, setData] = useState()
    const [date, setDate] = useState()


    useEffect(() => {

        fetch(COINTURL)
            .then((res) => res.json())
            .then((obj) => setData([obj.bpi.USD, obj.bpi.EUR, obj.bpi.GBP]))
            .catch((err) => console.log(err))

    }, [data])

    return (
        <>
            <div className='me'>
                <h3>Bitcoin Price Index in real-time.</h3>
            </div>
            <div className='container'>
                {data && data.map((single) => {
                    return (
                        <>
                            <Each data={single} />
                        </>
                    )
                })}
            </div>
        </>
    )
}
