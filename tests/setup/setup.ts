import { afterEach, vi } from 'vitest';

// Limpa todos os mocks após cada teste
afterEach(() => {
  vi.clearAllMocks();
});

// Configuração global para todos os testes
global.console = {
  ...console,
  // Você pode silenciar logs específicos durante os testes
  // log: vi.fn(),
  error: vi.fn(),
  warn: vi.fn(),
};

// Configuração de timeout global para testes
vi.setConfig({
  testTimeout: 10000,
});
