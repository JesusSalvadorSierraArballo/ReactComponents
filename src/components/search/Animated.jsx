import React, {useState, useRef}from 'react'
import Div from '../atoms/Div'
//import Input from '../atoms/Input'
import Span from '../atoms/Span'
import './animated.css';

export default function Animated(props) {
  const [statusInput, setStatusInput] = useState(false)
  let textInput = useRef(null);

  function handleToggleSearch() {
    setStatusInput(!statusInput)
  }
  
  function clearSearchField() {
    textInput.current.value=""
    textInput.current.focus()
  }

  function handleKeyPress(e) {
    if(e.code==="Enter") {
      props.search(e.target.value)
    } else if(e.code==="Escape") {
      clearSearchField() 
    }
  }  
  
  function handleOnTransitionEnd(e) {
    if(statusInput) {
      textInput.current.focus()
    }
  }

  return(
    <Div className='contenedor'>
      <Div onTransitionEnd={handleOnTransitionEnd} className={`search ${statusInput ? 'active' : ''}`}>
        <Div className='icon'
          onClick={handleToggleSearch}></Div>
	<Div className='input'>
	    <input 
	      ref={textInput} 
	      type="text" 
	      placeholder='Buscar' 
	      onKeyDown={handleKeyPress}/>
	    <Span className="clear" onClick={clearSearchField}></Span>
	</Div>
      </Div>
    </Div>
  )
}
