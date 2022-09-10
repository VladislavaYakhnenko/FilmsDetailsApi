import React from 'react'

const ButtonAbobus = (props) => {
  return (
    <button onClick={props.onClick} className="aboba">
      {props.text}
    </button>
  )
}

export default ButtonAbobus;
