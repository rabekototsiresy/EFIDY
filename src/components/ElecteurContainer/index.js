import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addNumberElecteur } from '../../redux/';

const ElecteurContainer = () => {
  const [electeur, setElecteur] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = ()=>{
    dispatch(addNumberElecteur(electeur))
    setElecteur(0)
  }
  return (
    <div>
      <div>
        <h3>Mpifidy</h3>
        <hr />
      </div>
      <div>
        <fieldset>
          <legend>
            ISAN'NY MPIFIDY
          </legend>
          <input type="number" min="0" value={electeur} onChange={(e)=>setElecteur(e.target.value)} />
          <button onClick={handleSubmit}>
            AMPIDIRO
          </button>
        </fieldset>
      </div>
    </div>
  )
}

export default ElecteurContainer
