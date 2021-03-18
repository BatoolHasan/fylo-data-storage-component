import React from 'react';
import ControlsContainer from "./ControlsContainer";
import StatsContainer from "./StatsContainer";
import styled, {ThemeProvider} from "styled-components";

const StyledDataStorageContainer = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;


@media only screen and (max-width: 820px) {
    flex-direction:column;
  }
`;


const theme = {
    Gradient: "hsl(6, 100%, 80%), hsl(335, 100%, 65%)",
Pale_Blue: "hsl(243, 100%, 93%)",
Grayish_Blue: "hsl(229, 7%, 55%)",
Dark_Blue: "hsl(228, 56%, 26%)",
Very_Dark_Blue: "hsl(229, 57%, 11%)",
  };
const DataStorageContainer=()=>{
 return(
    <ThemeProvider theme={theme}>
     <StyledDataStorageContainer aria-label="Fylo Data Storage">
         <ControlsContainer/>
         <StatsContainer/>
     </StyledDataStorageContainer>
     </ThemeProvider>

 )
}
export default DataStorageContainer;