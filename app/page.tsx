import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, MessageCircle, ArrowRight } from 'lucide-react'
import { teams, creators, news, partners } from '@/lib/data'

const stats = [
  { label: 'Active Rosters', value: '4', unit: '' },
  { label: 'Tournament Wins', value: '160', unit: '+' },
  { label: 'Combined Followers', value: '10M', unit: '+' },
  { label: 'Partner Brands', value: '8', unit: '' },
]

const GAME_COLORS: Record<string, string> = {
  VALORANT: '#FF4655',
  'APEX LEGENDS': '#CF4B00',
  'CALL OF DUTY': '#00A878',
  'ROCKET LEAGUE': '#4B8BF5',
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0D0D0D]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8191A]/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8191A]/5 blur-[100px] rounded-full" />

        {/* Diagonal accent */}
        <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-[#E8191A]/20 to-transparent" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 right-0 w-px h-full bg-[#E8191A]/30"
              style={{ right: `${i * 60}px`, transform: 'skewX(-15deg)', transformOrigin: 'top' }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#E8191A]/30 bg-[#E8191A]/5 px-4 py-1.5 rounded-sm mb-8 animate-fade-up">
              <div className="w-1.5 h-1.5 bg-[#E8191A] rounded-full animate-pulse" />
              <span className="text-xs font-mono text-[#E8191A] tracking-widest uppercase">Season 2025 — Now Recruiting</span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black uppercase leading-none mb-6 animate-fade-up stagger-1"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              <span className="block text-white text-[clamp(64px,12vw,140px)] tracking-tight">COMPETE.</span>
              <span className="block text-[clamp(64px,12vw,140px)] tracking-tight" style={{
                background: 'linear-gradient(135deg, #FF3334 0%, #E8191A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>CREATE.</span>
              <span className="block text-white text-[clamp(64px,12vw,140px)] tracking-tight">DOMINATE.</span>
            </h1>

            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10 animate-fade-up stagger-2">
              Overtake is a premier competitive esports organization building the next generation of champions. Four rosters. One mission.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up stagger-3">
              <Link
                href="/join"
                className="group flex items-center gap-3 bg-[#E8191A] hover:bg-[#B81011] px-8 py-4 font-bold tracking-widest uppercase text-sm transition-all hover:shadow-[0_0_40px_rgba(232,25,26,0.4)] clip-corner"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Try Out Now
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/teams"
                className="flex items-center gap-3 border border-white/10 hover:border-white/30 px-8 py-4 text-white/70 hover:text-white font-medium tracking-wider uppercase text-sm transition-all"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Our Rosters
              </Link>
              <a
                href="https://discord.gg/overtake"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#5865F2] hover:text-white border border-[#5865F2]/20 hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 px-5 py-4 text-sm font-medium transition-all"
              >
                <MessageCircle size={16} />
                Discord
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-white">Scroll</span>
        </div>
      </section>

      {/* ─── STATS TICKER ─── */}
      <div className="bg-[#E8191A] py-4 relative overflow-hidden">
        <div className="flex items-center gap-0 animate-none">
          <div className="flex items-center gap-16 px-8 w-full justify-center flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span
                  className="font-display font-black text-4xl text-white"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {s.value}{s.unit}
                </span>
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  {s.label}
                </span>
                <div className="w-px h-8 bg-white/20 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── TEAMS OVERVIEW ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[#E8191A] text-xs font-mono tracking-widest uppercase mb-3">// Our Rosters</p>
              <h2
                className="font-display font-black text-5xl md:text-7xl uppercase text-white"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                COMPETING AT<br />THE HIGHEST LEVEL
              </h2>
            </div>
            <Link
              href="/teams"
              className="hidden md:flex items-center gap-2 text-white/40 hover:text-[#E8191A] text-sm font-medium tracking-wider transition-colors"
            >
              View All Teams <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teams.map((team, i) => (
              <Link
                key={team.id}
                href={`/teams#${team.id}`}
                className="group relative bg-[#0D0D0D] border border-white/5 hover:border-white/10 p-6 card-hover overflow-hidden"
              >
                {/* Accent corner */}
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ background: team.color }}
                />
                <div
                  className="absolute top-0 left-0 w-full h-px"
                  style={{ background: `linear-gradient(90deg, ${team.color}, transparent)` }}
                />

                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: team.color }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-mono px-2 py-0.5"
                        style={{ color: team.color, background: `${team.color}15`, borderColor: `${team.color}30`, border: '1px solid' }}
                      >
                        {team.region}
                      </span>
                      <span className="text-xs font-mono text-white/30 tracking-wider">{team.rank} Ranked</span>
                    </div>
                    <h3
                      className="font-display font-black text-3xl text-white uppercase"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                      OT {team.game}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-white/20 text-xs font-mono mb-1">W / L</div>
                    <div className="font-mono text-sm">
                      <span className="text-green-400">{team.wins}</span>
                      <span className="text-white/30"> / </span>
                      <span className="text-red-400">{team.losses}</span>
                    </div>
                  </div>
                </div>

                {/* Roster */}
                <div className="flex flex-wrap gap-2">
                  {team.roster.map((player) => (
                    <div key={player.name} className="flex items-center gap-1.5 bg-white/3 border border-white/5 px-3 py-1.5 rounded-sm">
                      <span className="text-xs">{player.country}</span>
                      <span className="font-mono text-xs font-bold text-white">{player.name}</span>
                      <span className="text-white/30 text-xs">·</span>
                      <span className="text-white/40 text-xs">{player.role}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-white/30 group-hover:text-white/60 transition-colors font-medium">
                  View Roster <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREATORS ─── */}
      <section className="relative py-24 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#E8191A]/4 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[#E8191A] text-xs font-mono tracking-widest uppercase mb-3">// Content Creators</p>
              <h2
                className="font-display font-black text-5xl md:text-7xl uppercase text-white"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                CONTENT THAT<br />MOVES CULTURE
              </h2>
            </div>
            <Link
              href="/creators"
              className="hidden md:flex items-center gap-2 text-white/40 hover:text-[#E8191A] text-sm font-medium tracking-wider transition-colors"
            >
              All Creators <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {creators.map((creator, i) => (
              <div
                key={creator.id}
                className="group relative bg-[#141414] border border-white/5 hover:border-[#E8191A]/30 p-4 card-hover text-center overflow-hidden cursor-pointer"
              >
                {/* Avatar placeholder */}
                <div className="relative mx-auto mb-3 w-14 h-14">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E8191A]/30 to-[#E8191A]/5 border border-[#E8191A]/20 flex items-center justify-center">
                    <span
                      className="font-display font-black text-lg text-[#E8191A]"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                      {creator.handle.slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div
                  className="font-display font-black text-base text-white group-hover:text-[#E8191A] transition-colors"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {creator.handle}
                </div>
                <div className="text-white/30 text-xs mt-0.5">{creator.followers}</div>
                <div className="text-white/20 text-[10px] mt-1 truncate">{creator.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS ─── */}
      <section id="news" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[#E8191A] text-xs font-mono tracking-widest uppercase mb-3">// Latest Updates</p>
              <h2
                className="font-display font-black text-5xl md:text-7xl uppercase text-white"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                NEWS &<br />UPDATES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((article, i) => (
              <article
                key={article.id}
                className={`group relative bg-[#0D0D0D] border border-white/5 hover:border-white/10 overflow-hidden card-hover ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Thumbnail placeholder */}
                <div className="h-40 bg-[#141414] relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display font-black text-6xl text-white/5 uppercase"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                      OT
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#E8191A] via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-1 bg-[#E8191A]/90 text-white uppercase tracking-widest">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-white/30 text-xs font-mono mb-2">{article.date}</p>
                  <h3
                    className="font-display font-bold text-lg text-white group-hover:text-[#E8191A] transition-colors uppercase leading-tight mb-3"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center gap-2 mt-4 text-xs text-[#E8191A] font-medium">
                    Read More <ChevronRight size={12} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPONSORS ─── */}
      <section className="relative py-20 bg-[#0D0D0D] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/20 text-xs font-mono tracking-widest uppercase mb-10">
            // Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5">
            {partners.slice(0, 8).map((partner) => (
              <div
                key={partner.name}
                className="group bg-[#0D0D0D] hover:bg-[#141414] p-8 flex items-center justify-center transition-colors cursor-pointer"
              >
                <span
                  className="font-display font-black text-xl text-white/20 group-hover:text-white/60 uppercase tracking-wider transition-colors"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/partners"
              className="text-sm text-white/30 hover:text-[#E8191A] font-medium tracking-wider transition-colors"
            >
              View All Partners →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DISCORD CTA ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-[#E8191A]/8 blur-[100px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-[#5865F2]/30 bg-[#5865F2]/5 px-4 py-2 rounded-sm mb-8">
            <MessageCircle size={14} className="text-[#5865F2]" />
            <span className="text-xs font-mono text-[#5865F2] tracking-widest uppercase">Community</span>
          </div>
          <h2
            className="font-display font-black text-6xl md:text-8xl uppercase text-white leading-none mb-6"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            JOIN THE<br />
            <span style={{ color: '#5865F2' }}>COMMUNITY</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
            Connect with 50,000+ Overtake fans, get exclusive updates, and be first in line for tryouts.
          </p>
          <a
            href="https://discord.gg/overtake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752c4] px-10 py-5 font-bold tracking-widest uppercase text-base transition-all hover:shadow-[0_0_40px_rgba(88,101,242,0.4)]"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            <MessageCircle size={18} />
            Join Discord — Free
          </a>
        </div>
      </section>

      {/* ─── JOIN CTA BANNER ─── */}
      <div className="relative bg-[#E8191A] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-white/10"
              style={{ right: `${i * 40}px`, transform: 'skewX(-10deg)' }}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/60 text-sm font-mono tracking-widest uppercase mb-2">// Open Tryouts 2025</p>
            <h2
              className="font-display font-black text-5xl md:text-6xl uppercase text-white"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              THINK YOU HAVE<br />WHAT IT TAKES?
            </h2>
          </div>
          <Link
            href="/join"
            className="group flex-shrink-0 flex items-center gap-3 bg-white text-[#E8191A] hover:bg-[#0D0D0D] hover:text-white px-10 py-5 font-black tracking-widest uppercase text-base transition-all clip-corner"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Apply Now
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
