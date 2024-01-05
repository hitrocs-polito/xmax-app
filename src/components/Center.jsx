import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 0;
`

function Center({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Center
