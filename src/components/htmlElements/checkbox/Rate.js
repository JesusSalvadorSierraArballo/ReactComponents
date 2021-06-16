import React from 'react'
import H3 from '../../atoms/H3'
import Div from '../../atoms/Div'
import Input from '../../atoms/Input'
import PropTypes from 'prop-types'

function Rate(props) {

  const {maxRate, category, onClick} = props

  const radioButtons = (option) => {
    return ([...Array(maxRate).keys()].map((v)=> <Input key={maxRate-v} type='radio' onClick={()=>onClick(category, maxRate-v)} name={option}/>)) 
  }
  return ( 
    <Div className='skills'> <H3>{category}</H3> <Div className='rating'>{radioButtons(category)} </Div></Div>
  )
}

Rate.propTypes = {
  category:PropTypes.string,
  maxRate:PropTypes.number
}

Rate.defaultProps = {
  maxRate: 10 
};
export default Rate
