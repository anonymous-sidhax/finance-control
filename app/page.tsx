import { BigWidget } from './components/BigWidgetContainer'
import { HeaderSection } from './components/Header'
import { Navbar, type NavItem } from './components/Navbar'
import { SmallWidget } from './components/SmallWidgetContainer'

const navItems: NavItem[] = [
  { label: 'Dashboard', active: true },
  { label: 'Transactions' },
  { label: 'Wallet' },
  { label: 'Goals' },
  { label: 'Charts' },
  { label: 'Settings' },
]

export default function Home() {
  return (
    <div className='flex min-h-screen'>
      <Navbar items={navItems} />

      <main className='flex min-h-screen w-[85%] flex-col'>
        <HeaderSection />
        <div className='w-full grow p-6 lg:p-8 xl:p-10'>
          <div className='flex flex-col gap-6'>
            <SmallWidget />
            <BigWidget />
          </div>
        </div>
      </main>
    </div>
  )
}
