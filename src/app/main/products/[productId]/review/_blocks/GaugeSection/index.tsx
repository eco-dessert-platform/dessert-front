import reviewService from '@/domains/review/queries/service';
import { BADGE } from '@/domains/review/constants/badge';
import Gauge from './Gauge';

interface Props {
  params: { productId: string };
}

const GaugeSection = async ({ params: { productId } }: Props) => {
  const { brix, taste, texture } = await reviewService.getReviewRating(Number(productId));

  return (
    <section className="flex flex-col gap-[8px]">
      <Gauge
        left={{ text: BADGE.good.text, value: taste.good }}
        right={{ text: BADGE.bad.text, value: taste.bad }}
      />
      <Gauge
        left={{ text: BADGE.sweet.text, value: brix.sweet }}
        right={{ text: BADGE.plain.text, value: brix.plain }}
      />
      <Gauge
        left={{ text: BADGE.soft.text, value: texture.soft }}
        right={{ text: BADGE.dry.text, value: texture.dry }}
      />
    </section>
  );
};

export default GaugeSection;
