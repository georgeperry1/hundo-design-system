import { render, fireEvent, screen } from '@testing-library/react';

import Tabs from '.';
import ThemeWrapper from '../../../utils/test-theme-wrapper';

const mockTabOptions = [
  { value: 'Tab 1', label: 'Tab 1' },
  { value: 'Tab 2', label: 'Tab 2' },
  { value: 'Tab 3', label: 'Tab 3' },
];

describe('Spacer', () => {
  it('should render', () => {
    const { baseElement } = render(
      <ThemeWrapper TestedComponent={Tabs} componentProps={{ tabOptions: mockTabOptions }} />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should show an active tab when an initial value is passed', () => {
    const { baseElement } = render(
      <ThemeWrapper TestedComponent={Tabs} componentProps={{ tabOptions: mockTabOptions, initialValue: 'Tab 1' }} />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should hide the divider', () => {
    const { baseElement } = render(
      <ThemeWrapper TestedComponent={Tabs} componentProps={{ tabOptions: mockTabOptions, hideDivider: true }} />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should change the alignments of the tabs', () => {
    const { baseElement } = render(
      <ThemeWrapper TestedComponent={Tabs} componentProps={{ tabOptions: mockTabOptions, align: 'flex-end' }} />,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should send an event when changed', () => {
    const handleChange = jest.fn();

    render(
      <ThemeWrapper TestedComponent={Tabs} componentProps={{ tabOptions: mockTabOptions, onChange: handleChange }} />,
    );

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).toHaveBeenCalledWith('Tab 1');
  });
});
