import React from 'react'

const InputAboba = (props) => {
  function setTextAboba( e ) {
    props.setText(e.target.value);
  }

  return (
    <input className="inputAboba" onInput={setTextAboba}>
    </input>
  )
}

export default InputAboba;
