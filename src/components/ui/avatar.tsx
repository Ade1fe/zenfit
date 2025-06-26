import type React from "react"

interface AvatarProps {
  className?: string
  children: React.ReactNode
}

interface AvatarImageProps {
  src: string
  alt?: string
}

interface AvatarFallbackProps {
  className?: string
  children: React.ReactNode
}

export const Avatar: React.FC<AvatarProps> = ({ className = "", children }) => {
  return <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt = "" }) => {
  return <img className="aspect-square h-full w-full" src={src || "/placeholder.svg"} alt={alt} />
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className = "", children }) => {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${className}`}>
      {children}
    </div>
  )
}
