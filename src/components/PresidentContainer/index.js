import React, { useState,useEffect } from 'react'
import { connect,useDispatch } from 'react-redux';
import { addPresident } from '../../redux'

const PresidentContainer = (props) => {
  
  const [fullName, setFullName] = useState('')
  const handleSubmit = e=>{
    e.preventDefault()
    props.addPresident(fullName)
    setFullName('')
  }

  return (
    <div>
      <h3>AMPIDIRO IREO FILOHA HO FIDIANA</h3>
      <hr /> 
      <div>
        <fieldset>
          <legend>
          Anarana
          </legend>
          <form onSubmit={handleSubmit}>
            <input type="text" id="presidentName" onChange={ (e)=>setFullName(e.target.value)} value={fullName} />
            <button type="submit">
              AMPIDIRO
            </button>
       </form>
        </fieldset>
       
      </div>
    </div>
  )
}



const mapStateToProps = state=>{
  return{
    listPresident: state.listPresident
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    addPresident: (fullName)=>dispatch(addPresident(fullName))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PresidentContainer)
