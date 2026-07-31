type ProductImageZoomProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ProductImageZoom({ src, alt, className = "" }: ProductImageZoomProps) {
  return (
    <div className={`product-zoom ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}
