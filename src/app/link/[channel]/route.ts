import { NextRequest, NextResponse } from 'next/server';
import { isLinkChannel } from '@/domains/linktracking/constants/linkChannel';
import linkTrackingService from '@/domains/linktracking/queries/service';

export const dynamic = 'force-dynamic';

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ channel: string }> }
) => {
  const { channel } = await params;

  if (!isLinkChannel(channel)) {
    return new NextResponse('유효하지 않은 채널입니다.', { status: 400 });
  }

  try {
    const destinationUrl = await linkTrackingService.recordVisit({
      channel,
      userAgent: request.headers.get('user-agent') ?? '',
      referer: request.headers.get('referer') ?? '',
      forwardedFor: request.headers.get('x-forwarded-for') ?? ''
    });

    if (!destinationUrl) {
      return new NextResponse('추적 링크를 찾을 수 없습니다.', { status: 404 });
    }

    return NextResponse.redirect(destinationUrl, 302);
  } catch (e) {
    console.error('링크 추적 중 에러:', e);
    return new NextResponse('일시적인 오류가 발생했어요.', { status: 500 });
  }
};
