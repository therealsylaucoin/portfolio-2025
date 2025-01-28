import { describe, it, expect, vi } from 'vitest';
import isPropValid from '@emotion/is-prop-valid';
import { shouldForwardProp } from '../utils';

vi.mock('@emotion/is-prop-valid', () => ({
  default: vi.fn()
}));

describe('shouldForwardProp', () => {
  it('should return true for valid prop names when target is a string', () => {
    const mockPropName = 'validProp';
    const mockTarget = 'stringTarget';
    isPropValid.mockReturnValueOnce(true);
    const result = shouldForwardProp(mockPropName, mockTarget);
    expect(isPropValid).toHaveBeenCalledWith(mockPropName);
    expect(result).toBe(true);
  });

  it('should return false for invalid prop names when target is a string', () => {
    const mockPropName = 'invalidProp';
    const mockTarget = 'stringTarget';
    isPropValid.mockReturnValueOnce(false);
    const result = shouldForwardProp(mockPropName, mockTarget);
    expect(isPropValid).toHaveBeenCalledWith(mockPropName);
    expect(result).toBe(false);
  });

  it('should return true regardless of propName when target is not a string', () => {
    const mockPropName = 'anyProp';
    const mockTarget = { key: 'value' };
    const result = shouldForwardProp(mockPropName, mockTarget);
    expect(result).toBe(true);
  });
});