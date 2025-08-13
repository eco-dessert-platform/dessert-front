import productService from '@/domains/product/queries/service';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import React from 'react';

interface Props {
  productId: number;
}

const MarkdownImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  /* eslint-disable @next/next/no-img-element */
  <img alt="상품 상세" {...props} className="h-auto w-full" />
);

const BoardDetailsSection = async ({ productId }: Props) => {
  const {
    board: { boardDetail }
  } = await productService.getProductInfo(productId);

  return (
    <div className="w-full p-0 pt-[16px]">
      {boardDetail && (
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: MarkdownImage
          }}
        >
          {boardDetail}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default BoardDetailsSection;
