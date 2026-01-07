export type NavItem = {
  label: string
  active?: boolean
}

type NavbarProps = {
  items: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  return (
    <aside className='sticky top-0 flex h-screen w-[15%] min-w-[200px] flex-col border-r border-gray-200/70 bg-white/80 px-6 py-8 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/70'>
      <div className='mb-8 text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral-100'>
        Finance Control
      </div>
      <nav className='flex flex-col gap-2 text-sm font-medium text-gray-600 dark:text-neutral-300'>
        {items.map((item) => (
          <button
            key={item.label}
            type='button'
            className={`rounded-lg px-3 py-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 ${
              item.active
                ? 'bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-white'
                : 'text-gray-700 dark:text-neutral-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className='mt-auto' />
      <nav className='mt-6 flex flex-col gap-2 text-sm font-medium text-gray-600 dark:text-neutral-300'>
        <button
          type='button'
          className='rounded-lg px-3 py-2 text-left text-gray-700 transition-colors hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
        >
          Help
        </button>
        <button
          type='button'
          className='rounded-lg px-3 py-2 text-left text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30'
        >
          Logout
        </button>
      </nav>
    </aside>
  )
}
