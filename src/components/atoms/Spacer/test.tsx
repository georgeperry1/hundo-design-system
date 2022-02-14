import { render } from '@testing-library/react';

import Spacer from '.';

describe('Spacer', () => {
  it('should render', () => {
    const { baseElement } = render(<Spacer />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should support w and h', () => {
    const { baseElement } = render(<Spacer w={10} h={10} />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should work with inline mode', () => {
    const { baseElement } = render(<Spacer w={10} inline />);

    expect(baseElement).toMatchSnapshot();
  });
});
