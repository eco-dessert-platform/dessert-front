import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const accessToken = (await cookies()).get('accessToken')?.value || null;

  if (pathname.startsWith('/review') && !accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
};
