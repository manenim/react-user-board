import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import UserCard from '../UserCard';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

//DOM test
it('UserCard DOM', () => {
    render(<UserCard />);
    expect(screen.getByText('UserCard')).toBeTruthy();
});

// snapshot test
it('UserCard snapshot', () => {
    const { asFragment } = render(<UserCard />);
    expect(asFragment()).toMatchSnapshot();
}
);

