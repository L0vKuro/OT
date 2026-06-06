import { teams } from '@/lib/data'
import { Trophy, Flag, ChevronRight, Swords } from 'lucide-react'

export const metadata = {
  title: 'Teams — Overtake Esports',
  description: 'Meet the Overtake rosters competing across VALORANT, Apex Legends, Call of Duty, and Rocket League.',
}

const GAME_ICONS: Record<string, string> = {
  VALORANT: '⚡',
  'APEX LEGENDS': '🔥',
  'CALL OF DUTY': '🎯',
  'ROCKET LEAGUE': '🚀',
}

export default function TeamsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Page Header */}
      <div className="relative pt-36 pb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8191A]/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[#E8191A] text-xs font-mono tracking-widest uppercase mb-4">// Competitive Rosters</p>
          <h1
            className="font-display font-black text-7xl md:text-9xl uppercase text-white leading-none"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            OUR<br />TEAMS
          </h1>
          <p className="text-white/40 text-lg mt-6 max-w-lg">
            Four rosters. Four disciplines. One standard of excellence. Overtake competes at the highest levels across North America and beyond.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { icon: Trophy, label: 'Tournament Wins', value: '160+' },
              { icon: Flag, label: 'Nationalities', value: '12' },
              { icon: Swords, label: 'Active Players', value: '18' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 border border-white/8 px-5 py-3 bg-white/2">
                <Icon size={16} className="text-[#E8191A]" />
                <span className="text-white/40 text-sm">{label}</span>
                <span
                  className="font-display font-black text-xl text-white"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {teams.map((team, idx) => (
          <div key={team.id} id={team.id} className="scroll-mt-24">
            {/* Team Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{GAME_ICONS[team.game]}</span>
                  <span
                    className="text-xs font-mono px-2 py-1 font-bold uppercase tracking-widest"
                    style={{ color: team.color, background: `${team.color}15`, border: `1px solid ${team.color}30` }}
                  >
                    {team.region}
                  </span>
                  <span
                    className="text-xs font-mono px-2 py-1 bg-white/5 text-white/40 uppercase tracking-wider"
                  >
                    {team.rank} Ranked
                  </span>
                </div>
                <h2
                  className="font-display font-black text-5xl md:text-6xl uppercase"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', color: team.color }}
                >
                  OT {team.game}
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-white/30 text-xs font-mono uppercase tracking-wider mb-1">Wins</div>
                  <div
                    className="font-display font-black text-4xl text-green-400"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {team.wins}
                  </div>
                </div>
                <div className="text-white/20 text-2xl font-thin">—</div>
                <div className="text-center">
                  <div className="text-white/30 text-xs font-mono uppercase tracking-wider mb-1">Losses</div>
                  <div
                    className="font-display font-black text-4xl text-red-500"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {team.losses}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white/30 text-xs font-mono uppercase tracking-wider mb-1">Win Rate</div>
                  <div
                    className="font-display font-black text-4xl text-white"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {Math.round((team.wins / (team.wins + team.losses)) * 100)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Roster Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {team.roster.map((player, pi) => (
                <div
                  key={player.name}
                  className="group relative bg-[#0D0D0D] border border-white/5 hover:border-opacity-40 overflow-hidden card-hover"
                  style={{}}
                >
                  {/* Top accent */}
                  <div
                    className="h-px w-full"
                    style={{ background: `linear-gradient(90deg, ${team.color}, transparent)` }}
                  />

                  {/* Avatar area */}
                  <div
                    className="h-32 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${team.color}10, transparent)` }}
                  >
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute bottom-3 left-4">
                      <span
                        className="font-display font-black text-4xl opacity-20"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', color: team.color }}
                      >
                        {pi + 1 < 10 ? `0${pi + 1}` : pi + 1}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 text-xl">{player.country}</div>
                    <div className="absolute bottom-3 right-4">
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider"
                        style={{ color: team.color, background: `${team.color}15`, border: `1px solid ${team.color}30` }}
                      >
                        {player.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3
                      className="font-display font-black text-xl text-white uppercase"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                      {player.name}
                    </h3>
                    <p className="text-white/30 text-xs mt-1 font-mono">{player.real}</p>
                    <p className="text-white/20 text-xs mt-0.5">Age {player.age}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            {idx < teams.length - 1 && (
              <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* Join CTA */}
      <div className="bg-[#0D0D0D] border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="font-display font-black text-5xl md:text-6xl uppercase text-white mb-4"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            WANT TO WEAR THE JERSEY?
          </h2>
          <p className="text-white/40 mb-8">Applications for Season 2025 tryouts are open.</p>
          <a
            href="/join"
            className="inline-flex items-center gap-3 bg-[#E8191A] hover:bg-[#B81011] px-10 py-5 font-black tracking-widest uppercase text-base transition-all hover:shadow-[0_0_40px_rgba(232,25,26,0.4)] clip-corner"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Apply for Tryout <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}
