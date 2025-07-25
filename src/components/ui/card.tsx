import type React from "react"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm ${className}`}>{children}</div>
  )
}

export const CardHeader: React.FC<CardProps> = ({ className = "", children }) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
}

export const CardTitle: React.FC<CardProps> = ({ className = "", children }) => {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}

export const CardContent: React.FC<CardProps> = ({ className = "", children }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}
