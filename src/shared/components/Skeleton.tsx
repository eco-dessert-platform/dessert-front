import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

const Skeleton = ({ className }: Props) => (
  <div className={twMerge('h-4 w-full rounded-full animate-pulse bg-gray-300', className)} />
);

export default Skeleton;
