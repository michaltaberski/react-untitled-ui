import { describe, expect, test } from 'vitest';
import { extractFlexProps } from './extract-flex';

describe('extractFlexProps', () => {
  test.each([
    [{}, {}],
    [{ direction: 'row' }, { flexDirection: 'row' }],
    [{ wrap: 'wrap' }, { flexWrap: 'wrap' }],
    [{ align: 'center' }, { alignItems: 'center' }],
    [{ justify: 'center' }, { justifyContent: 'center' }],
    [{ gap: 7 }, { gap: '56px' }],
    [
      { direction: 'row', wrap: 'wrap' },
      { flexDirection: 'row', flexWrap: 'wrap' },
    ],
  ])('%s maps to %s', (input, output) => {
    expect(extractFlexProps(input).style).toEqual(output);
  });
});
