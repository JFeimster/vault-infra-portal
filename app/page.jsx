// The main dashboard view
export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John.</h1>
        <p className="text-white/50 mt-1">Here is the latest data from your embedded widget.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-panel border border-white/5 p-6 rounded-2xl">
          <p className="text-sm font-medium text-white/40 mb-1">Total Funded Volume</p>
          <p className="text-3xl font-bold">$142,500</p>
          <div className="mt-2 flex items-center text-xs text-brand-500">
            <span>+12.5% from last month</span>
          </div>
        </div>
        
        <div className="bg-panel border border-white/5 p-6 rounded-2xl">
          <p className="text-sm font-medium text-white/40 mb-1">Active Leads (30d)</p>
          <p className="text-3xl font-bold">48</p>
          <div className="mt-2 flex items-center text-xs text-white/40">
            <span>Currently in processing</span>
          </div>
        </div>

        <div className="bg-panel border border-white/5 p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <p className="text-sm font-medium text-white/40 mb-1">Your Commission</p>
          <p className="text-3xl font-bold text-brand-500">$4,275</p>
          <div className="mt-2 flex items-center text-xs text-white/40">
            <span>Pending next payout cycle</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Originations Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Originations</h2>
            <button className="text-sm text-brand-500 hover:text-brand-400 transition-colors">View All</button>
          </div>
          
          <div className="bg-panel border border-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white/40 border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 font-medium">Business / Client</th>
                    <th className="px-6 py-4 font-medium">Amount Req.</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">Apex Logistics LLC</td>
                    <td className="px-6 py-4">$50,000</td>
                    <td className="px-6 py-4 text-white/50">Today, 10:23 AM</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">Underwriting</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">Sarah Jenkins (Sole Prop)</td>
                    <td className="px-6 py-4">$15,000</td>
                    <td className="px-6 py-4 text-white/50">Yesterday</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-brand-500/10 text-brand-500 text-xs font-medium border border-brand-500/20">Funded</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">Horizon E-Commerce</td>
                    <td className="px-6 py-4">$120,000</td>
                    <td className="px-6 py-4 text-white/50">Oct 24, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-white/10 text-white/70 text-xs font-medium border border-white/10">App Received</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions / Widget Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Your Widget</h2>
          <div className="bg-panel border border-white/5 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center mb-4 border border-brand-500/20">
              <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="font-bold mb-2">Embed Active</h3>
            <p className="text-sm text-white/50 mb-6">Your widget is currently receiving traffic from <span className="text-white">johnsmithrealty.com</span>.</p>
            
            <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
              <span>Copy Code Snippet</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
