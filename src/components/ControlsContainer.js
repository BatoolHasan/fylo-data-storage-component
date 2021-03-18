import React from 'react';
import styled from "styled-components";
import logo from '../images/logo.svg'
import fileIcon from '../images/icon-document.svg';
import folderIcon from '../images/icon-folder.svg';
import uploadIcon from '../images/icon-upload.svg';
import FyloIcon from './FyloIcon';
const StyledControlsContainer = styled.div`
background-color:${props=>props.theme.Dark_Blue};
height:100%;
width:30%;
border-radius:15px;
border-top-right-radius:100px;
padding:3em;
padding-top:3.5em;
margin-right:2em;

@media only screen and (max-width: 820px) {
    width:100%;
    margin-right:0;
    margin-bottom:1em;
  }
`;

const StyledIconsContainer = styled.div`
display:flex;
margin-top:3em;
width:60%;
justify-content:space-between;
@media only screen and (max-width: 1175px) {
    width:70%
}
@media only screen and (max-width: 1080px) {
    width:80%
}
@media only screen and (max-width: 950px) {
    width:100%
}
@media only screen and (max-width: 820px) {
    width:50%;
}
@media only screen and (max-width: 620px) {
    width:45%;
}
@media only screen and (max-width: 520px) {
    width:50%;
}
@media only screen and (max-width: 430px) {
    width:65%;
}
  `;
const ControlsContainer=()=>{

 return(
     <StyledControlsContainer>
         <div><a href="#" aria-label="Fylo website link"><img alt="Fylo Logo" src={logo}/></a></div>
         <StyledIconsContainer>

         <FyloIcon src={fileIcon} text="file"/>
         <FyloIcon src={folderIcon} text="folder"/>
         <FyloIcon src={uploadIcon} text="upload"/>
         </StyledIconsContainer>
     </StyledControlsContainer>
 )
}
export default ControlsContainer;