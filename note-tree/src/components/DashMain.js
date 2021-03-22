import styled from 'styled-components'

function DashMain(){
   return (
       <StyledDash>
           <h1>Your Branches</h1>
           <section className="main">
               <h3>Biology</h3>
               <h3>Coding</h3>
               <h3>DeepDives</h3>
           </section>
       </StyledDash>
   ) 
}

const StyledDash = styled.div`

h1{
    text-align:center;
}

.main{
    display:flex;
    justify-content:space-evenly
}

`

export default DashMain