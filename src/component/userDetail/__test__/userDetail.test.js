import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import UserDetail from '../UserDetail';

// automatically unmount and cleanup DOM after the test is finished.    
afterEach(cleanup);

//DOM test
it('UserDetail DOM', () => {
    render(<UserDetail />);
    expect(screen.getByText('UserDetail')).toBeTruthy();
});

// snapshot test
it('UserDetail snapshot', () => {
    const { asFragment } = render(<UserDetail />);
    expect(asFragment()).toMatchSnapshot();
});
