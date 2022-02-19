import React from 'react'
import Agriculture from '../Agriculture/Agriculture'
import Inhalate from '../Inhalete/Inhalate'
import BelowGrowProfit from './BelowGrowProfit/BelowGrowProfit'
import Chillum from './Chillums/Chillums'
import Cutivation from './Cutivation/Cutivation'
import GrowProfit from './GrowProfit/GrowProfit'
import Header from './Header/Header'
import Portable from './Portable/Portable'
import Vaporize from './Vaporize/Vaporize'

const Homepage = () => {
  return (
    <>
    <Header/>
    <Inhalate/>
    <Vaporize/>
    <Portable/>
    <Chillum/>
    <Cutivation/>
    <Agriculture/>
    <GrowProfit/>
    <BelowGrowProfit/>
    </>
  )
}

export default Homepage