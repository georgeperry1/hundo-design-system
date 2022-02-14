import { render } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('should render', () => {
    const { baseElement } = render(<Button />);

    expect(baseElement).toMatchSnapshot();
  });
});
