import React from 'react'
import Div from '../../atoms/Div'
import H2 from '../../atoms/H2'
import Rate from './Rate'
import PropTypes from 'prop-types'
import './rate.css' 
import Button from '../../atoms/Button'

function RateContainer(props) {
  const {optionsRate, globalName,maxRate} = props
  const rates = {}
  const handleClick = (key, value) => {
    rates[key]=value
  }

  const onClick=()=>{
   alert(JSON.stringify(rates))
  }

  return (
    <Div className='container'>
      <H2>{globalName}</H2>
	{optionsRate.map((option)=>(<Rate key={option} category={option} maxRate={maxRate} onClick={handleClick}/>))}	
	<Button onClick={onClick}> Send </Button>	
    </Div>
   )
}

RateContainer.propTypes = {
  globalName:PropTypes.string,
  optionsRate:PropTypes.array,
  maxRate:PropTypes.number
}

RateContainer.defaultProps = {
  maxRate: 10 
};
export default RateContainer
