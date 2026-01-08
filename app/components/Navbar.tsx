export type NavItem = {
  label: string
  active?: boolean
}

type NavbarProps = {
  items: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  return (
    <aside className='sticky top-0 flex h-screen w-[15%] min-w-[200px] flex-col border-r border-white/20 bg-white/30 px-6 py-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/20'>
      <div className='mb-8 font-mono text-xl font-bold tracking-wider text-gray-900 uppercase dark:text-white'>
        Finance Control
      </div>
      <nav className='flex flex-col gap-2 text-sm font-semibold tracking-wide text-gray-700 dark:text-neutral-200'>
        {items.map((item) => (
          <button
            key={item.label}
            type='button'
            className={`rounded-lg px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/40 hover:shadow-md dark:hover:bg-white/10 ${
              item.active
                ? 'bg-white/50 text-gray-900 shadow-md backdrop-blur-sm dark:bg-white/10 dark:text-white'
                : 'text-gray-700 dark:text-neutral-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className='mt-auto' />
      <nav className='mt-6 flex flex-col gap-2 text-sm font-semibold tracking-wide text-gray-700 dark:text-neutral-200'>
        <button
          type='button'
          className='rounded-lg px-3 py-2 text-left text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/40 hover:shadow-md dark:text-neutral-200 dark:hover:bg-white/10'
        >
          Help
        </button>
        <button
          type='button'
          className='rounded-lg px-3 py-2 text-left text-red-600 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-red-100/50 hover:shadow-md dark:text-red-400 dark:hover:bg-red-500/20'
        >
          Logout
        </button>
      </nav>
    </aside>
  )
}
