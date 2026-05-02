import { LinkChannel } from '@/domains/linktracking/constants/linkChannel';
import Service from '@/shared/queries/service';

class LinkTrackingService extends Service {
  async recordVisit({
    channel,
    userAgent,
    referer,
    forwardedFor
  }: {
    channel: LinkChannel;
    userAgent: string;
    referer: string;
    forwardedFor: string;
  }) {
    const res = await this.fetchExtend.get(`/link/${channel.toUpperCase()}`, {
      redirect: 'manual',
      cache: 'no-store',
      headers: {
        'User-Agent': userAgent,
        Referer: referer,
        'X-Forwarded-For': forwardedFor
      }
    });

    return res.headers.get('location');
  }
}

const linkTrackingService = new LinkTrackingService();

export default linkTrackingService;
