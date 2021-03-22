import { NavLink, useHistory } from "react-router-dom"


function Popup(){

    const history = useHistory()

    const routeToDash = () =>{
        history.push('/main')
    }

    return(
        <header className="popup">
        <h1>welcome to mondal</h1>
        {/* </a> */}
        {/* danger code below */}
        {/* <button onClick={window.open('http://localhost:3000/main','_blank')}>dashboard</button> */}
        <a href="http://localhost:3000/main" target="_blank" rel="noreferrer">
        dashboard
        </a>
      </header>
    )
}
export default Popup