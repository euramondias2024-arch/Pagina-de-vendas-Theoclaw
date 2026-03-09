export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-black text-primary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Página não encontrada</p>
      <a href="/" className="text-primary hover:underline">Voltar para o início</a>
    </div>
  );
}
