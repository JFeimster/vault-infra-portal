import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-luxe font-sans">
        {/* Sidebar - Locked width, clean borders */}
        <aside className="w-72 border-r border-white/5 bg-panel/50 backdrop-blur-xl flex flex-col">
          <div className="p-8 border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">V</div>
              <span className="text-xl font-bold tracking-tight text-white">Vault<span className="opacity-40 font-medium">Infra</span></span>
            </div>
          </div>
          
          <nav className="flex-1 p-6 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-accent/10 text-accent font-semibold border border-accent/20">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <span>Originations</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              <span>Widget Setup</span>
            </a>
          </nav>

          <div className="p-6 border-t border-white/5">
            <div className="p-4 rounded-2xl bg-white/5 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">JS</div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate">Jason Feimster</p>
                <p className="text-[10px] uppercase tracking-wider opacity-40">Agent Partner</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-luxe via-luxe to-[#0a120e]">
          {children}
        </main>
      </body>
    </html>
  );
}
