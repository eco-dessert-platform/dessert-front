interface ImageCounterProps {
  index: number;
  total: number;
}

const ImageCounter = ({ index, total }: ImageCounterProps) => (
  <div className="text-11 font-medium text-white">
    {index + 1}/{total}
  </div>
);

export default ImageCounter;
