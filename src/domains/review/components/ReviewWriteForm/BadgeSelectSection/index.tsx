import { MouseEventHandler } from 'react';
import BadgeSection from './BadgeSection';
import DescriptionSection from './DescriptionSection';
import NextButtonSection from './NextButtonSection';

interface Props {
  onNextClick: MouseEventHandler<HTMLButtonElement>;
}

const BadgeSelectSection = ({ onNextClick }: Props) => (
  <>
    <DescriptionSection />
    <BadgeSection />
    <NextButtonSection onNextClick={onNextClick} />
  </>
);

export default BadgeSelectSection;
