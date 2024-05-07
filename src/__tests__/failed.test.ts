import { describe, expect, test } from 'vitest';

describe('failed 테스트', () => {
  test('PR check 테스트용 입니다.', () => {
    expect(false).toBeTruthy();
  });
});
