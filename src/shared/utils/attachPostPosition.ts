export const attachPostPosition = (
  word: string | undefined,
  postPosition: '은' | '는' | '이' | '가' | '을' | '를' | '과' | '와'
) => {
  if (!word || typeof word !== 'string') {
    return postPosition;
  }

  const lastIdx = word.length - 1;
  const lastCharCode = word.charCodeAt(lastIdx);

  const KR_FIRST_CHAR_CODE = 44032;
  const REPEAT = 28;
  const hasCoda = (lastCharCode - KR_FIRST_CHAR_CODE) % REPEAT > 0;

  let correctedPostPosition = postPosition;
  switch (postPosition) {
    case '은':
    case '는':
      correctedPostPosition = hasCoda ? '은' : '는';
      break;
    case '이':
    case '가':
      correctedPostPosition = hasCoda ? '이' : '가';
      break;
    case '을':
    case '를':
      correctedPostPosition = hasCoda ? '을' : '를';
      break;
    case '과':
    case '와':
      correctedPostPosition = hasCoda ? '과' : '와';
      break;
    default:
      correctedPostPosition = postPosition;
  }

  return word + correctedPostPosition;
};
