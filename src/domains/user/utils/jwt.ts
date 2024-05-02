export function parseJwt(token: string) {
  const payloadBase64 = token.split('.')[1];
  const decodedPayload = window.atob(payloadBase64);
  const decoded = JSON.parse(decodedPayload);

  return decoded;
}

export function expToDate(exp: number) {
  const expireDate = new Date(exp * 1000);
  return expireDate;
}
