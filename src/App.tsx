import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { ThemeProvider } from "@/hooks/use-theme";
import Dashboard from "@/pages/Dashboard";
import Agents from "@/pages/Agents";
import AgentDetail from "@/pages/AgentDetail";
import Ranking from "@/pages/Ranking";
import Financial from "@/pages/Financial";
import Projects from "@/pages/Projects";
import Ads from "@/pages/Ads";
import ActivityFeed from "@/pages/ActivityFeed";
import Insights from "@/pages/Insights";
import LandingPage from "@/pages/LandingPage";
import PasswordGate from "@/pages/PasswordGate";
import NotFound from "@/pages/NotFound";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuth = localStorage.getItem("tc_auth") === "tc_authenticated";
  if (!isAuth) return <Navigate to="/senha" replace />;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/:id" element={<AgentDetail />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/ads" element={<Ads />} />
              <Route path="/activity" element={<ActivityFeed />} />
              <Route path="/insights" element={<Insights />} />
            </Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/senha" element={<PasswordGate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

