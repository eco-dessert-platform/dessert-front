interface ImageCounterProps {
  index: number;
  total: number;
}

const ImageCounter = ({ index, total }: ImageCounterProps) => (
  <div className="text-white text-11 font-medium">
    {index + 1}/{total}
  </div>
);

export default ImageCounter;
