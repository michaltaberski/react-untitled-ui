import { describe, expect, it, test } from 'vitest';
import {
  SupportedParamType,
  mapPropsToStyle,
  propsMerge,
} from './extract-margin-padding';

describe('propsMerge', () => {
  it('empty case', () => {
    expect(propsMerge({}, 'p')).toEqual({});
  });

  test.each([
    ['p', { pt: 1, pr: 1, pb: 1, pl: 1 }],
    ['px', { pl: 1, pr: 1 }],
    ['py', { pt: 1, pb: 1 }],
    ['pt', { pt: 1 }],
    ['pr', { pr: 1 }],
    ['pb', { pb: 1 }],
    ['pl', { pl: 1 }],
    ['m', { mt: 1, mr: 1, mb: 1, ml: 1 }],
    ['mx', { ml: 1, mr: 1 }],
    ['my', { mt: 1, mb: 1 }],
    ['mt', { mt: 1 }],
    ['mr', { mr: 1 }],
    ['mb', { mb: 1 }],
    ['ml', { ml: 1 }],
  ])('single prop "%s" defined', (param, paramMapResult) => {
    expect(propsMerge({ [param]: 1 }, param[0] as SupportedParamType)).toEqual(
      paramMapResult,
    );
  });
});

describe('mapPropsToStyle', () => {
  it('empty case', () => {
    expect(mapPropsToStyle({})).toEqual({});
  });

  test.each([
    [
      { mt: 1, mr: 1, mb: 1, ml: 1 },
      { marginTop: 1, marginRight: 1, marginBottom: 1, marginLeft: 1 },
    ],
    [
      { pl: 1, pr: 1 },
      { paddingLeft: 1, paddingRight: 1 },
    ],
    [
      { pt: 1, pb: 1 },
      { paddingTop: 1, paddingBottom: 1 },
    ],
    [
      { pt: 1, pr: 1, pb: 1, pl: 1 },
      { paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 1 },
    ],
    [
      { m: 2 },
      { marginTop: 2, marginRight: 2, marginBottom: 2, marginLeft: 2 },
    ],
    [
      { mx: 7, py: 6 },
      { marginLeft: 7, marginRight: 7, paddingTop: 6, paddingBottom: 6 },
    ],
  ])('%s maps to %s', (input, output) => {
    expect(mapPropsToStyle(input)).toEqual(output);
  });

  it('mapFn', () => {
    expect(mapPropsToStyle({ mt: 1 }, x => `${x}px`)).toEqual({
      marginTop: '1px',
    });
  });
});
