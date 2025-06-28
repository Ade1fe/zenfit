

// import * as React from "react"

// interface DropdownMenuProps {
//   children: React.ReactNode
// }

// interface DropdownMenuTriggerProps {
//   asChild?: boolean
//   children: React.ReactNode
// }

// interface DropdownMenuContentProps {
//   align?: "start" | "center" | "end"
//   children: React.ReactNode
// }

// interface DropdownMenuItemProps {
//   className?: string
//   children: React.ReactNode
//   onClick?: () => void
// }

// const DropdownMenuContext = React.createContext<{
//   open: boolean
//   setOpen: (open: boolean) => void
// }>({
//   open: false,
//   setOpen: () => {},
// })

// export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <DropdownMenuContext.Provider value={{ open, setOpen }}>
//       <div className="relative inline-block text-left">{children}</div>
//     </DropdownMenuContext.Provider>
//   )
// }

// export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ asChild, children }) => {
//   const { open, setOpen } = React.useContext(DropdownMenuContext)

//   const handleClick = () => {
//     setOpen(!open)
//   }

//   if (asChild && React.isValidElement(children)) {
//     return React.cloneElement(children, {
//       onClick: handleClick,
//     } as any)
//   }

//   return <button onClick={handleClick}>{children}</button>
// }

// export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ align = "start", children }) => {
//   const { open, setOpen } = React.useContext(DropdownMenuContext)
//   const contentRef = React.useRef<HTMLDivElement>(null)

//   React.useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
//         setOpen(false)
//       }
//     }

//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside)
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [open, setOpen])

//   if (!open) return null

//   const alignmentClasses = {
//     start: "left-0",
//     center: "left-1/2 transform -translate-x-1/2",
//     end: "right-0",
//   }

//   return (
//     <div
//       ref={contentRef}
//       className={`absolute top-full mt-1 w-56 rounded-md border border-gray-200 bg-white py-1 shadow-lg z-50 ${alignmentClasses[align]}`}
//     >
//       {children}
//     </div>
//   )
// }

// export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ className = "", children, onClick }) => {
//   const { setOpen } = React.useContext(DropdownMenuContext)

//   const handleClick = () => {
//     onClick?.()
//     setOpen(false)
//   }

//   return (
//     <button
//       className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
//       onClick={handleClick}
//     >
//       {children}
//     </button>
//   )
// }
"use client"

import * as React from "react"

interface DropdownMenuProps {
  children: React.ReactNode
}

interface DropdownMenuTriggerProps {
  asChild?: boolean
  children: React.ReactNode
}

interface DropdownMenuContentProps {
  align?: "start" | "center" | "end"
  children: React.ReactNode
}

interface DropdownMenuItemProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const DropdownMenuContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownMenuContext.Provider>
  )
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ asChild, children }) => {
  const { open, setOpen } = React.useContext(DropdownMenuContext)

  const handleClick = () => {
    setOpen(!open)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
    } as any)
  }

  return <button onClick={handleClick}>{children}</button>
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ align = "start", children }) => {
  const { open, setOpen } = React.useContext(DropdownMenuContext)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, setOpen])

  if (!open) return null

  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
    end: "right-0",
  }

  return (
    <div
      ref={contentRef}
      className={`absolute top-full mt-1 w-56 rounded-md border border-gray-200 bg-white py-1 shadow-lg z-50 ${alignmentClasses[align]}`}
    >
      {children}
    </div>
  )
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ className = "", children, onClick }) => {
  const { setOpen } = React.useContext(DropdownMenuContext)

  const handleClick = () => {
    onClick?.()
    setOpen(false)
  }

  return (
    <button
      className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

// Export all components
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }
