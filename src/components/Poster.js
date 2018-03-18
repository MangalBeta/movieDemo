import React , { Component } from 'react';
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import { URL_IMG,IMG_SIZE_SMALL, IMG_SIZE_LARGE } from '../const'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { Glyphicon } from 'react-bootstrap'

export default function Poster(props){

  const StyledImg = styled.div`
    &:hover .image{
       opacity:1;
    }
    &:hover .title{
       opacity: ${props.info ? 1:0};
    }
  `;
  const Info =  styled.div`
      position: absolute;
      top: 75%;
      color:white;
      padding:10px,
      font-weight:bold;
      opacity:0;
  `;
  return(
    <StyledImg>
      <Image className="image" 
      key={props.id} src={URL_IMG+IMG_SIZE_LARGE+props.path} responsive />
      {props.info &&
      <Info className="title">
        <h4>{props.title}</h4>
      </Info>
      }
    </StyledImg>
  );
}
