import React from 'react';
import styled from "styled-components";

const StyledFyloIcon = styled.div`
background-color:${props=>props.theme.Very_Dark_Blue};
width:3.3em;
height:3.3em;
border-radius:7px;
display:flex;
align-items:center;
justify-content:center;
`;
const FyloIcon=(props)=>{

 return(
     <StyledFyloIcon>
         <div><a href="#" aria-label={props.text+" link"}><img alt={props.text+" link"} src={props.src}/></a></div>
     </StyledFyloIcon>
 )
}
export default FyloIcon;