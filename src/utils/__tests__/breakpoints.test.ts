import breakpoints from '../breakpoints';

describe('breakpoints', () => {
  it('should return a string with the correct breakpoint', () => {
    expect(breakpoints.xl).toEqual('(min-width: 1440px)');
  });
});
