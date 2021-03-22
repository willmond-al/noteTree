import './App.css';
import { NavLink, Route, Switch, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import Popup from './components/Popup'
import DashMain from './components/DashMain'

function App() {

  return (
    <Router>
      <Switch>
        <Route 
        path = "/main"
        render={()=><DashMain/>}
        />
        <Route
        path = "/"
        render={()=><Popup/>}
        />
      </Switch>
    </Router>
  );
}

const StyledApp = styled.div`

padding: 100px
`

export default App;
