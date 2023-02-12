import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
// import CheckboxWithLabel from '../CheckboxWithLabel';
import CardController from '../cardController';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CardController', () => {
    // const {queryByLabelText, getByLabelText} = render(
    //     <CardController />
    // );
    
    expect(screen.getByLabelText(/off/i)).toBeTruthy();
    
    fireEvent.click(screen.getByLabelText(/off/i));
    
    expect(screen.getByLabelText(/on/i)).toBeTruthy();
});

// snapshot test
it('CardController snapshot', () => {
    const {asFragment} = render(<CardController />);
    expect(asFragment()).toMatchSnapshot();
});
    
//DOM test
it('CardController DOM', () => {
    render(<CardController />);
    expect(screen.getByText('CardController')).toBeTruthy();
});

