import { render } from '@testing-library/react';

import MainNav from '.';

describe('MainNav', () => {
  it('should render', () => {
    const { baseElement } = render(<MainNav />);

    expect(baseElement).toMatchSnapshot();
  });
});
