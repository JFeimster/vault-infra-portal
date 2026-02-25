import './globals.css'; // <-- THIS IS THE MISSING PIECE

export const metadata = {
  title: 'Partner Portal | VaultInfra',
  description: 'Manage your originations and widget settings.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-luxe text-white antialiased">
        
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 bg-luxe flex flex-col justify-between hidden md:flex">
          <div>
            <div className="h-20 flex items-center px-6 border-b border-white/5">
              <div className="w-8 h-8 rounded bg-brand-500 flex items-center justify-center font-bold text-black mr-3">V</div>
              <span className="text-xl font-bold tracking-tight">Vault<span className="text-white/50">Infra</span></span>
            </div>
            
            <nav className="p-4 space-y-1">
              <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-white/5 text-white font-medium border border-white/10">
                <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Originations</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                <span>Widget Code</span>
              </a>
            </nav>
          </div>
          
          <div className="p-4 border-t border-white/5">
            <div className="flex items-center space-x-3 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm text-white">JS</div>
              <div>
                <p className="text-sm font-medium text-white">John Smith</p>
                <p className="text-xs text-white/40">Agent Partner</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
          
          <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 md:hidden bg-luxe">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center font-bold text-black text-xs">V</div>
              <span className="font-bold text-white">VaultInfra</span>
            </div>
            <button className="text-white/70">Menu</button>
          </header>

          <div className="flex-1 overflow-y-auto p-6 lg:p-10">
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}
