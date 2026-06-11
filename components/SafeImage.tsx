"use client";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wrapper de imagem com fallback onError.
 * Deve ser usado em Server Components que precisam de tratamento de erro de imagem.
 */
export default function SafeImage({ src, alt, className = "", style }: SafeImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
