import { render, fireEvent, screen } from '@testing-library/react';

import TabItem from '.';
import ThemeWrapper from '../../../utils/test-theme-wrapper';

describe('Spacer', () => {
  it('should render', () => {
    const { baseElement } = render(
      <ThemeWrapper TestedComponent={TabItem} componentProps={{ value: 'Tab 1', label: 'Tab 1' }} />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should show a bottom border when active', () => {
    const { baseElement } = render(
      <ThemeWrapper TestedComponent={TabItem} componentProps={{ value: 'Tab 1', label: 'Tab 1', active: true }} />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should hide the border', () => {
    const { baseElement } = render(
      <ThemeWrapper
        TestedComponent={TabItem}
        componentProps={{ value: 'Tab 1', label: 'Tab 1', active: true, hideBorder: true }}
      />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should send event when clicked', () => {
    const handleClick = jest.fn();

    render(
      <ThemeWrapper
        TestedComponent={TabItem}
        componentProps={{ value: 'Tab 1', label: 'Tab 1', onTabClick: handleClick }}
      />,
    );

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('should not send click event if disabled', () => {
    const handleClick = jest.fn();

    render(
      <ThemeWrapper
        TestedComponent={TabItem}
        componentProps={{ value: 'Tab 2', label: 'Tab 2', onTabClick: handleClick, disabled: true }}
      />,
    );

    fireEvent.click(screen.getByText('Tab 2'));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
