import type React from "react"

interface LayoutWrapperProps {
  children: React.ReactNode
  sidebarCollapsed?: boolean
}

export default function LayoutWrapper({ children, sidebarCollapsed = false }: LayoutWrapperProps) {
  return (
    <div className={`transition-all duration-300 ${sidebarCollapsed ? "lg:pl-20" : "lg:pl-64 xl:pl-72"}`}>
      {/* Account for header height (64px) + mobile search bar height (52px) on mobile */}
      <div className="pt-16 md:pt-16">
        {/* Mobile search bar spacing */}
        <div className="md:hidden h-[52px]" />
        {children}
      </div>
    </div>
  )
}
