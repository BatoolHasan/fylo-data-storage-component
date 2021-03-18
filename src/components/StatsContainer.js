import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";


const StyledContainer=styled.div`
height:100%;
width:60%;
display:flex;
align-self:flex-end;
@media only screen and (max-width: 820px) {
    width:100%;
  }
`;

const StyledStatsContainer = styled.div`
background-color:${props=>props.theme.Dark_Blue};
width:100%;
border-radius:15px;
padding:3em;
position:relative;
`;

const StyledSpan=styled.span`
font-weight:700;
`;

const StyledSliderContainer= styled.div`
background-color:${props=>props.theme.Very_Dark_Blue};
width:100%;
height:1.5em;
border-radius:15px;
margin-top:2em;
padding:3px;

`;

const widthAnimation = keyframes`
  from {
    width:0;
}

to {
    width:${props=>props.width};
  }
`;

const StyledSlider= styled.div`
background-image:linear-gradient(to right, ${props=>props.theme.Gradient});
width:${props=>props.width};
height:100%;
border-radius:15px;
padding:2px;
display:flex;
justify-content:flex-end;

animation: ${widthAnimation} 2s linear forwards;

`;



const StyledSliderCircle= styled.div`
height:100%;
width:0.85em;
background-color:${props=>props.theme.Pale_Blue};
border-radius:50%;
`;

const StyledDataContainer= styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:1em`;

const StyledPopup= styled.div`
padding:0.5em 0.8em;
background-color:white;
position:absolute;
top:-1.5em;
right:1em;
color:${props=>props.theme.Very_Dark_Blue};
font-size:3rem;
font-weight:700;
border-radius:15px;
border-bottom-right-radius:0;
display:flex;
align-items:center;

@media only screen and (max-width: 820px) {
    top:3.7em;
    border-bottom-right-radius:15px;
    padding:0.3em 0.8em;
    right:50%;
    transform:translate(50%, 0)
    
  }
`;

const StyledLightSpan= styled.span`
text-transform:uppercase;
color:${props=>props.theme.Grayish_Blue};
font-size:1rem;
margin-left:1em;
white-space: nowrap;
`;

const Triangle = styled.div`
clip-path: polygon(100% 100%, 0 0, 100% 0);
width:2em;
height:3em;
background-color:white;
position:absolute;
top:1.5em;
right:3em;

@media only screen and (max-width: 820px) {
    display:none;
    
  }
`;
const StatsContainer=()=>{
    const [usedStorage, setUsedStorage] = useState(815);// in a real application this would be retrieved from a database by an api call
 return(
     <StyledContainer>
     <StyledStatsContainer>
         <StyledPopup>{1000-usedStorage} <StyledLightSpan> GB Left</StyledLightSpan></StyledPopup>
         <Triangle/>
         <p>You've used <StyledSpan>{usedStorage+" GB"}</StyledSpan> of your storage</p>
         <StyledSliderContainer>
            <StyledSlider width={usedStorage/10 +"%"}>
                <StyledSliderCircle/>
            </StyledSlider>
         </StyledSliderContainer>
         <StyledDataContainer>
                <p><StyledSpan>0 GB</StyledSpan></p>
                <p><StyledSpan>1000 GB</StyledSpan></p>
         </StyledDataContainer>
     </StyledStatsContainer>
     </StyledContainer>
 )
}
export default StatsContainer;