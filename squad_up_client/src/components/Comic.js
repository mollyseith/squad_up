import React from 'react';
import { render } from 'react-dom';
import { Strip, Panel, Character, Balloon } from 'react-komik';
var imgUrl = 'https://sonny.js.org/react-komik/dist/';
var myimgUrl = 'localhost:3000/images'

let Comic = (props) => (
  <Strip title={props.name} column="1" width="250" height="350">
  <Panel background={props.photo}>
    <Balloon
                image={require(`../images/bday.svg`)}
                text=""
                height="100"
                left="0"/>
    <Balloon
                image={require(`../images/sombrero.svg`)}
                text=""
                height="100"
                left="30"/>
    <Balloon
                image={require(`../images/spinhat.svg`)}
                text=""
                height="100"
                left="75"/>
    <Balloon
                image={require(`../images/tobogan.svg`)}
                text=""
                height="80"
                text=""
                left="120"/>
    <Balloon
                image={require(`../images/tophat.svg`)}
                height="80"
                text=""
                left="150"/>
    </Panel>
  </Strip>
);


export default Comic;
