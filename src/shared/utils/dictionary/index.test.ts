import { describe, expect, test } from 'vitest';
import Dictionary from '.';

describe('Dictionary 테스트', () => {
  test('정방향 테스트', () => {
    const dict = new Dictionary({ apple: '사과', melon: '메론' });

    const value1 = dict.translate('apple');
    expect(value1).toBe('사과');

    const value2 = dict.translate('melon');
    expect(value2).toBe('메론');
  });

  test('역방향 테스트', () => {
    const dict = new Dictionary({ apple: '사과', melon: '메론' });

    const value1 = dict.translate('사과');
    expect(value1).toBe('apple');

    const value2 = dict.translate('메론');
    expect(value2).toBe('melon');
  });

  test('대소문자를 구분 정방향 테스트', () => {
    const dict = new Dictionary({
      apple: '사과 소문자',
      Apple: '사과 대문자'
    });

    const value1 = dict.translate('apple');
    expect(value1).toBe('사과 소문자');

    const value2 = dict.translate('Apple');
    expect(value2).toBe('사과 대문자');
  });

  test('대소문자를 구분 역방향 테스트', () => {
    const dict = new Dictionary({
      apple: '사과 소문자',
      Apple: '사과 대문자'
    });

    const value3 = dict.translate('사과 대문자');
    expect(value3).toBe('Apple');

    const value4 = dict.translate('사과 소문자');
    expect(value4).toBe('apple');
  });

  test('사전에 없는 값은 undefined를 리턴한다.', () => {
    const dict = new Dictionary({
      apple: '사과',
      melon: '메론'
    });

    const value = dict.translate('banana');
    expect(value).toBeUndefined();
  });
});
