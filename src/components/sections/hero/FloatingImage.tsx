type FloatingImageProps = {
  src: string
  alt: string
  className?: string
}

export function FloatingImage({ src, alt, className = '' }: FloatingImageProps) {
  return (
    <div
      className={`absolute size-17.5 overflow-hidden rounded-full ring-4 ring-white sm:size-20 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="size-full object-cover"
        loading="lazy"
      />
    </div>
  )
}