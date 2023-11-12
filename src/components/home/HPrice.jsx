import React from 'react'
import Title from '../common/title/Title'
import PriceCard from '../pricing/PriceCard'

const HPrice = () => {
  return (
    <>
    <section className="hprice padding">
    <Title subtitle='our pricing' title='pricing and packages'/>
            <div className="price container grid">
                <PriceCard/>
       
            </div>
    </section>
    </>
  )
}

export default HPrice