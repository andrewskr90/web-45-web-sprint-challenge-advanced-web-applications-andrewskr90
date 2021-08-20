import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';
import { useHistory } from 'react-router-dom'
import { fetchColorService } from '../services/fetchColorService'

// return (
//     <div className="container">
//       <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
//       <Bubbles colors={colors}/>
//     </div>
//   );
// };

jest.mock('../services/fetchColorService')


test("Renders without errors", ()=> {
    // const fakeHandle= jest.fn()
    // render(<BubblePage colors={[]} editing={false} toggleEdit={fakeHandle} saveEdit={fakeHandle} deleteColor={fakeHandle}/>)
    
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
});