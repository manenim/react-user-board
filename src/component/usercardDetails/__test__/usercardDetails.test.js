import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import UserCardDetails from '../UserCardDetails';


// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

//DOM test
it('UserCardDetails DOM', () => {
    render(<UserCardDetails />);
    expect(screen.getByText('UserCardDetails')).toBeTruthy();
});


// snapshot test
it('UserCardDetails snapshot', () => {
    const { asFragment } = render(<UserCardDetails />);
    expect(asFragment()).toMatchSnapshot();
});
