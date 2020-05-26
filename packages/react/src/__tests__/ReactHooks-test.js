/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let React;

describe('ReactHooks', () => {
  // resolveDispatcher will be searched from local scope of hooks
  // eslint-disable-next-line no-unused-vars
  const resolveDispatcher = () => ({
    useEffect: jest.fn(),
    useLayoutEffect: jest.fn(),
    useMemo: jest.fn(),
    useCallback: jest.fn(),
  });

  beforeAll(() => {
    React = require('react');
  });

  it('throws error when no callback was provided to useEffect hook', () => {
    expect(() => {
      React.useEffect();
    }).toThrow();
  });

  it('throws error when no callback was provided to useLayoutEffect hook', () => {
    expect(() => {
      React.useLayoutEffect();
    }).toThrow();
  });

  it('throws error when no callback was provided to useMemo hook', () => {
    expect(() => {
      React.useMemo();
    }).toThrow();
  });

  it('throws error when no callback was provided to useCallback hook', () => {
    expect(() => {
      React.useCallback();
    }).toThrow();
  });
});
