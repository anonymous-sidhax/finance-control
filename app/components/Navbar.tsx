'use client'

import { useState } from 'react'

export type NavItem = {
  label: string
  active?: boolean
}

type NavbarProps = {
  items: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className='fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white/30 backdrop-blur-xl md:hidden dark:bg-black/20'
      >
        <svg
          className='h-6 w-6 text-gray-900 dark:text-white'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          {isMobileOpen ? (
            <path d='M6 18L18 6M6 6l12 12' />
          ) : (
            <path d='M4 6h16M4 12h16M4 18h16' />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 md:hidden'
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Navbar */}
      <aside
        className={`group fixed inset-y-0 left-0 z-50 flex h-screen w-[250px] flex-col border-r border-white/20 bg-white/30 shadow-xl backdrop-blur-xl transition-all duration-300 md:w-auto dark:border-white/10 dark:bg-black/20 ${
          isCollapsed
            ? 'md:w-20 md:px-3 md:py-8'
            : 'md:w-[15%] md:min-w-[200px] md:px-6 md:py-8'
        } ${
          isMobileOpen
            ? 'mt-[10px] mb-[10px] ml-[10px] translate-x-0'
            : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className='flex items-center justify-between'>
          {!isCollapsed && (
            <div className='font-mono text-xl font-bold tracking-wider text-gray-900 uppercase dark:text-white'>
              Finance Control
            </div>
          )}
          {isCollapsed && (
            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-center font-mono text-sm font-bold text-gray-900 dark:bg-white/10 dark:text-white'>
              FC
            </div>
          )}
        </div>

        {/* Collapse Button - Centered on Right */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className='absolute top-1/2 right-1 hidden h-[15%] w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-white/20 text-gray-900 transition-all duration-300 hover:bg-white/30 md:mr-0 md:ml-[10px] md:flex dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
        >
          <svg
            className='h-6 w-6 transition-transform duration-300'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            style={{
              transform: isCollapsed ? 'scaleX(-1)' : 'scaleX(1)',
            }}
          >
            <path d='M15 19l-7-7 7-7' />
          </svg>
        </button>
        <nav className='mt-8 flex flex-col gap-2 text-sm font-semibold tracking-wide text-gray-700 dark:text-neutral-200'>
          {items.map((item) => (
            <button
              key={item.label}
              type='button'
              onClick={() => setIsMobileOpen(false)}
              className={`rounded-lg px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/40 hover:shadow-md dark:hover:bg-white/10 ${
                item.active
                  ? 'bg-white/50 text-gray-900 shadow-md backdrop-blur-sm dark:bg-white/10 dark:text-white'
                  : 'text-gray-700 dark:text-neutral-200'
              } ${isCollapsed ? 'justify-center px-0' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              {!isCollapsed && item.label}
            </button>
          ))}
        </nav>
        <div className='mt-auto' />
        <nav className='mt-6 flex flex-col gap-2 text-sm font-semibold tracking-wide text-gray-700 dark:text-neutral-200'>
          <button
            type='button'
            onClick={() => setIsMobileOpen(false)}
            className={`rounded-lg px-3 py-2 text-left text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/40 hover:shadow-md dark:text-neutral-200 dark:hover:bg-white/10 ${isCollapsed ? 'justify-center px-0' : ''}`}
            title={isCollapsed ? 'Help' : undefined}
          >
            {!isCollapsed && 'Help'}
          </button>
          <button
            type='button'
            onClick={() => setIsMobileOpen(false)}
            className={`rounded-lg px-3 py-2 text-left text-red-600 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-red-100/50 hover:shadow-md dark:text-red-400 dark:hover:bg-red-500/20 ${isCollapsed ? 'justify-center px-0' : ''}`}
            title={isCollapsed ? 'Logout' : undefined}
          >
            {!isCollapsed && 'Logout'}
          </button>
        </nav>
      </aside>
    </>
  )
}
