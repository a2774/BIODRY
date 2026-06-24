export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  {
    label: 'Technology',
    href: '/technology',
    children: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Device & Probes', href: '/device' },
      { label: 'Certifications', href: '/certifications' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Rising Damp', href: '/solutions' },
      { label: 'Moisture Diagnosis', href: '/diagnosis' },
    ],
  },
  {
    label: 'Collaborate',
    href: '/partner',
    children: [
      { label: 'Become a Partner', href: '/partner' },
      { label: 'Consultants', href: '/partner#consultants' },
      { label: 'Franchising', href: '/partner#franchising' },
    ],
  },
  {
    label: 'Resources',
    href: '/blog',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  { label: 'Countries', href: '/countries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
