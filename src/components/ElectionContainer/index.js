import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addPoint,addDiedPoint,addWhitePoint,setWinner,setValidate } from '../../redux'


const ElectionContainer = () => {
  const president = useSelector(state => state.president)
  const electeur = useSelector(state => state.electeur.numberOfElecteur)
  const dispatch = useDispatch()
  const [dP, setDP] = useState('')
  const [btnDp, setBtnDp] = useState(true)
  const [wP, setWP] = useState('')
  const [btnWp, setBtnWp] = useState(true)
  const [showBtnRes, setShowBtnRes] = useState(true)
 
  
  const setPoint = (index,e)=>{
    dispatch(addPoint(e.target.value,index))

  }

  const setDiedPoint = point=>{
    dispatch(addDiedPoint(point))
    setBtnDp(false)
  }


  const setWhitePoint = point=>{
    dispatch(addWhitePoint(point))
    setBtnWp(false)
  }

  const getResult = ()=>{
    const livePoint = (parseInt(electeur)-(parseInt(dP)+parseInt(wP)))/2
    console.log('livePoint: ',livePoint)
    dispatch(setWinner(livePoint))
    setShowBtnRes(false)
  }
  
  const validePoint = (id)=>{
    dispatch(setValidate(id))
  }

  const showBtn = showBtnRes 
  ?
  (<button onClick={getResult}>
    RESULTAT
  </button>) : (
    president.listPresident.map( val=>val.winner ? <h3>{val.fullName}</h3>: null)
  )
  const displayPresident = president.listPresident.length == 0 ? <h3>TSY MISY FILOHA</h3> : president.listPresident.map( (info,index)=>(
    <div style={{width: '300px'}}>
            
            <fieldset>
              <legend> {info.fullName} </legend>
              <label>Isan'ny vato: </label>
              <input 
              type="number" 
              min="0" 
              onChange={(e)=>setPoint(index,e)}
              
            
              />
              <br />
              {
                info.validate ? (<span>Ok</span>) : <button onClick={()=>validePoint(info.id)}>
                EKENA
              </button>
              }
            </fieldset>
          </div>
  ))
  return (
    <div>

        <div>
          <h3>FIFIDIANANA</h3>
          <hr />
        </div>
        <div className="container">
          <div>
            <h3>Isan'ny filoha: {president.listPresident.length}</h3>
          </div>
          <div>
            <h3>Isan'Mpifidy: {electeur}</h3>
          </div>
          
          <hr />
        </div>
        <div id="main">
          {displayPresident}
        </div>
        {
          president.listPresident.length !== 0 ? (
            <div>
          <div>
            <fieldset>
              <legend>
                  VATO FOTSY
              </legend>
              <input type="number"  value={wP} onChange={(e)=>setWP(e.target.value)} />
              {
                btnWp ? (<button onClick={()=>setWhitePoint(wP)}>
                EKENA
              </button>) : (<span>Ok</span>)
              }
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>
                VATO MATY
              </legend>
              <input type="number"  value={dP} onChange={(e)=>setDP(e.target.value)} />
              {
                btnDp ? (<button onClick={()=>setDiedPoint(dP)}>
                EKENA
              </button>) : (<span>Ok</span>)
              }
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>
                RESULTAT
              </legend>
              <div>

               {
                 showBtn
               }
                    
            

               {/* <h3>
                DIDIER RATSIRAKA ELU PRESIDENT DE LA REPUBLIQUE
               </h3> */}
              </div>
            </fieldset>
          </div>
        </div>
          ): null
        }
    </div>
  )
}

export default ElectionContainer
