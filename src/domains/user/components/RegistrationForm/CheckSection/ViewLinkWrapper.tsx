import Link from 'next/link';

interface ViewLinkWrapperProps {
  href: string;
  children: string;
}

const ViewLinkWrapper = ({ href, children }: ViewLinkWrapperProps) => (
  <div className="flex justify-between items-center w-full">
    <p>{children}</p>
    <Link href={href} className="typo-body-12-regular-underline text-gray-500">
      보기
    </Link>
  </div>
);

export default ViewLinkWrapper;
