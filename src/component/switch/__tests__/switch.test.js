import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Switch from '../Switch';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

//DOM test
it('CardController DOM', () => {
    render(<Switch />);
    expect(screen.getByText('CardController')).toBeTruthy();
});

// snapshot test
it('CardController snapshot', () => {
    const {asFragment} = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
});



