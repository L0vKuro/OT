import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Youtube, Instagram, Twitch, MessageCircle, ChevronRight } from 'lucide-react'

const socialLinks = [
  { icon: Twitter,       label: 'Twitter',   href: 'https://twitter.com/overtakegg' },
  { icon: Youtube,       label: 'YouTube',   href: 'https://youtube.com/@overtakegg' },
  { icon: Instagram,     label: 'Instagram', href: 'https://instagram.com/overtakegg' },
  { icon: Twitch,        label: 'Twitch',    href: 'https://twitch.tv/overtakegg' },
  { icon: MessageCircle, label: 'Discord',   href: 'https://discord.gg/overtake' },
]

const footerLinks = {
  Organization: [
    { href: '/about',    label: 'About Us' },
    { href: '/teams',    label: 'Teams' },
    { href: '/creators', label: 'Creators' },
    { href: '/partners', label: 'Partners' },
  ],
  Engage: [
    { href: '/join',                      label: 'Join Overtake' },
    { href: '/contact',                   label: 'Contact' },
    { href: '/#news',                     label: 'News' },
    { href: 'https://discord.gg/overtake', label: 'Discord' },
  ],
  Legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#141414] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8191A]/4 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              {/* Real PNG logo */}
              <div className="relative w-11 h-11 group-hover:drop-shadow-[0_0_8px_rgba(232,25,26,0.6)] transition-all duration-300">
                <Image
                  src="/overtake-logo.png"
                  alt="Overtake"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span
                className="font-display text-2xl font-black tracking-widest text-[#F2F2F2]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.2em' }}
              >
                OVERTAKE
              </span>
            </Link>

            <p className="text-[#F2F2F2]/35 text-sm leading-relaxed max-w-xs mb-6">
              A premier esports organization competing at the highest level. We build champions, cultivate creators, and dominate every stage.
            </p>

            {/* Discord CTA */}
            <a
              href="https://discord.gg/overtake"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/30 px-5 py-3 rounded-sm text-sm font-medium text-[#5865F2] hover:text-[#F2F2F2] transition-all group"
            >
              <MessageCircle size={16} />
              Join our Discord
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold tracking-widest uppercase text-[#E8191A] mb-5"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.2em' }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#F2F2F2]/35 hover:text-[#F2F2F2] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5" />

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F2F2F2]/18 text-xs font-mono">
            © {new Date().getFullYear()} OVERTAKE ESPORTS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center text-[#F2F2F2]/25 hover:text-[#F2F2F2] border border-white/5 hover:border-[#E8191A]/40 hover:bg-[#E8191A]/10 rounded transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
