export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="tech-card p-6">
          <p className="text-sm font-medium text-muted-foreground">Total de Agentes</p>
          <h3 className="text-2xl font-bold">12</h3>
        </div>
        <div className="tech-card p-6">
          <p className="text-sm font-medium text-muted-foreground">Conversas Hoje</p>
          <h3 className="text-2xl font-bold">1,284</h3>
        </div>
        <div className="tech-card p-6">
          <p className="text-sm font-medium text-muted-foreground">Taxa de Sucesso</p>
          <h3 className="text-2xl font-bold">98.2%</h3>
        </div>
        <div className="tech-card p-6">
          <p className="text-sm font-medium text-muted-foreground">ROI Estimado</p>
          <h3 className="text-2xl font-bold">R$ 45.200</h3>
        </div>
      </div>
    </div>
  );
}
