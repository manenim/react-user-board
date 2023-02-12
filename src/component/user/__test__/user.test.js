import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import User from '../User';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

//DOM test
it('User DOM', () => {
    render(<User />);
    expect(screen.getByText('User')).toBeTruthy();
});

// snapshot test
it('User snapshot', () => {
    const { asFragment } = render(<User />);
    expect(asFragment()).toMatchSnapshot();
});

