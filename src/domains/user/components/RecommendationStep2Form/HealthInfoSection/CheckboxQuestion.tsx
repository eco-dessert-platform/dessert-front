'use client';

import { cn } from '@/shared/utils/cn';
import { selectInputVariants } from '@/shared/style/variants';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import CheckboxNewver from '@/shared/components/CheckboxNewver';

interface OptionType extends React.InputHTMLAttributes<HTMLInputElement> {}

interface Props {
  title: string;
  subTitle: string;
  required?: boolean;
  options: Array<OptionType>;
}

const CheckboxQuestion = ({ title, subTitle, required = false, options }: Props) => (
  <div>
    <PaddingWrapper className="pb-[10px]">
      <h4 className="typo-title-16-semibold text-gray-900">
        {title}
        {required && <span className="text-primary-orange-red">*</span>}
      </h4>
      <p className="typo-title-14-regular text-gray-700">{subTitle}</p>
    </PaddingWrapper>
    <PaddingWrapper className="pt-0 flex flex-wrap gap-[10px]">
      {options.map((option) => {
        const { checked, name, value } = option;
        const id = `${name}/${value}`;
        return (
          <label
            key={id}
            htmlFor={id}
            className={cn(
              'flex min-w-max p-[8px] gap-[6px] items-center typo-title-14-regular text-gray-900',
              selectInputVariants({ outline: false, checked }),
              checked && 'typo-title-14-semibold'
            )}
          >
            <CheckboxNewver id={id} {...option} />
            {value}
          </label>
        );
      })}
    </PaddingWrapper>
  </div>
);

export default CheckboxQuestion;
