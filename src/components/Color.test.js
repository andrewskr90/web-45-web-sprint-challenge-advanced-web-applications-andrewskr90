import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

{/* <Color key={color.id} setEditColor={setEditColor} color={color} toggleEdit={toggleEdit} deleteColor={deleteColor}/>)}
      </ul> */}

const color = {color:'teal', code:{hex:'#B4C424'}, id:'1'}

test("Renders without errors with blank color passed into component", () => {

    // render(<Color color={color}/>)
});
  
test("Renders the color passed into component", () => {
    // render(<Color color={color}/>)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});