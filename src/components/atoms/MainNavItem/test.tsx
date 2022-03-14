import { render } from '@testing-library/react';

import MainNavItem from '.';
import ThemeWrapper from '../../../utils/test-theme-wrapper';

const NavItemProps = {
  text: 'Profile',
  icon: 'https://www.svgrepo.com/show/794/male-user.svg',
  backgroundColor: '#FFFF50',
  shadowColor: '#B7B73D',
};

describe('MainNav', () => {
  it('should render', () => {
    const { baseElement } = render(<ThemeWrapper TestedComponent={MainNavItem} componentProps={NavItemProps} />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should show active state', () => {
    const { baseElement } = render(
      <ThemeWrapper TestedComponent={MainNavItem} componentProps={{ ...NavItemProps, active: true }} />,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
