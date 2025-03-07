import { describe, it, expect, vi } from 'vitest';
import { detectEnvironment } from '../../src/index';

describe('detectEnvironment', () => {
  it('should detect Expo environment', () => {
    vi.stubGlobal('process', { env: { EXPO_VERSION: '1.0.0' } });
    expect(detectEnvironment()).toBe('expo');
    vi.unstubAllGlobals();
  });

  it('should detect React Native environment', () => {
    vi.stubGlobal('navigator', { product: 'ReactNative' });
    expect(detectEnvironment()).toBe('react-native');
    vi.unstubAllGlobals();
  });

  it('should detect Vite environment', () => {
    vi.stubGlobal('process', { env: { VITE: 'true' } });
    expect(detectEnvironment()).toBe('vite');
    vi.unstubAllGlobals();
  });

  // Adicione mais testes para outros ambientes
}); 