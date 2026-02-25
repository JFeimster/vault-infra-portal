export default function Dashboard() {
  return (
    <div className="p-12 max-w-7xl mx-auto space-y-12">
      {/* Header Area */}
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-2">Command Center</h1>
          <p className="text-slate-400">Origination performance for <span className="text-accent">vault-infra-portal.vercel.app</span></p>
        </div>
        <button className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
          Export Report
        </button>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Funded Volume', value: '$142,500', trend: '+12.5%', color: 'text-accent' },
          { label: 'Active Pipeline', value: '48 Leads', trend: '8 Pending', color: 'text-white' },
          { label: 'Your Commission', value: '$4,275', trend: 'Ready to Payout', color: 'text-accent' },
        ].map((kpi, i) => (
          <div key={i} className="p-8 rounded-3xl bg-panel border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-all"></div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-4">{kpi.label}</p>
            <p className={`text-4xl font-black ${kpi.color}`}>{kpi.value}</p>
            <p className="mt-4 text-xs font-semibold text-slate-400 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse"></span>
              {kpi.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Table Section */}
        <div className="lg:col-span-2 bg-panel border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h2 className="font-bold text-white uppercase tracking-widest text-xs">Recent Submissions</h2>
            <span className="text-[10px] text-accent bg-accent/10 px-2 py-1 rounded">Live Feed</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-[10px] uppercase tracking-widest text-slate-500 bg-white/[0.02]">
                <tr>
                  <th className="px-8 py-4">Client</th>
                  <th className="px-8 py-4">Request</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {[
                  { name: 'Apex Logistics LLC', amount: '$50,000', status: 'Underwriting', statusColor: 'text-yellow-500' },
                  { name: 'Sarah Jenkins', amount: '$15,000', status: 'Funded', statusColor: 'text-accent' },
                  { name: 'Horizon E-Com', amount: '$120,000', status: 'Review', statusColor: 'text-slate-400' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.03] transition-colors">
                    <td className="px-8 py-6 font-bold text-white">{row.name}</td>
                    <td className="px-8 py-6 text-slate-400">{row.amount}</td>
                    <td className="px-8 py-6">
                      <span className={`flex items-center space-x-2 ${row.statusColor} font-mono text-[10px] uppercase font-bold`}>
                        <span className="w-1 h-1 rounded-full bg-current"></span>
                        <span>{row.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Config Card */}
        <div className="bg-accent p-8 rounded-3xl shadow-[0_20px_50px_rgba(16,185,129,0.2)] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black text-black leading-tight mb-4">Your Widget is Live.</h3>
            <p className="text-black/60 text-sm font-medium mb-8">Currently serving traffic from your agent domain. Leads are routing to your dashboard instantly.</p>
          </div>
          <button className="w-full py-4 bg-black text-white font-bold rounded-2xl hover:bg-zinc-900 transition-all flex items-center justify-center space-x-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            <span>Copy Snippet</span>
          </button>
        </div>
      </div>
    </div>
  );
}
