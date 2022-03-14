import { render } from '@testing-library/react';

import MainNavItem from '.';

const NavItemProps = {
  text: 'Profile',
  icon: 'https://www.svgrepo.com/show/794/male-user.svg',
  backgroundColor: '#FFFF50',
  shadowColor: '#B7B73D',
};

describe('MainNav', () => {
  it('should render', () => {
    const { baseElement } = render(<MainNavItem {...NavItemProps} />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should show active state', () => {
    const { baseElement } = render(<MainNavItem active {...NavItemProps} />);

    expect(baseElement).toMatchSnapshot();
  });
});
