import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar stub */}
      <aside className="w-64 border-r border-border bg-card hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-bold text-primary">TheoClaw</h2>
        </div>
        <nav className="px-4 space-y-2">
          <div className="p-2 hover:bg-muted rounded-lg cursor-pointer">Dashboard</div>
          <div className="p-2 hover:bg-muted rounded-lg cursor-pointer">Agentes</div>
          <div className="p-2 hover:bg-muted rounded-lg cursor-pointer">Ranking</div>
        </nav>
      </aside>
      
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border flex items-center px-8 justify-between">
          <h1 className="font-semibold">Painel de Controle</h1>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40" />
          </div>
        </header>
        <div className="p-8 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
