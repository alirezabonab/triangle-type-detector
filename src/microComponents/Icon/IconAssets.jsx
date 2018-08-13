import React from 'react';
import lightBlue from '@material-ui/core/colors/lightBlue';

const path=(color= lightBlue[500], d)=>{
    return <path fill={color} d={d} />;
};

export default {
   
    isosceles:         color => <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Artboard" stroke="#979797" stroke-width="4"> <polygon id="Triangle" transform="translate(128.500000, 128.500000) rotate(90.000000) translate(-128.500000, -128.500000) " points="128.5 48 189 209 68 209"></polygon> </g> </g> ,
    equilateral:           color => <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Artboard" stroke="#979797" stroke-width="4"> <polygon id="Triangle" points="128.5 65 210 192 47 192"></polygon> </g> </g>,
    scalene:           color =>  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square"> <g id="Artboard" stroke="#979797" stroke-width="4"> <g id="Group" transform="translate(26.000000, 70.000000)"> <path d="M1,0.00434815487 L204,115" id="Line"></path> <path d="M0.666666667,115 L0.666666667,0.497854239" id="Line"></path> <path d="M0.504926108,115.5 L204.495074,115.5" id="Line"></path> </g> </g> </g>,
    
    
}