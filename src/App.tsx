import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Assuming a generic Homepage exists, if not, login could be the index
// For this example, let's assume a Homepage exists or will be added.
// If no specific Homepage, "/" could redirect to "/login"
// import Homepage from "./pages/Homepage"; // Example: if you have a Homepage

import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists in src/pages/

const queryClient = new QueryClient();

// Placeholder for a generic Homepage component for the '/' route
// In a real scenario, this would be your main application landing page after login.
// If your app is purely auth-gated without a public landing page,
// you might redirect '/' to '/login'.
const PlaceholderHomepage = () => {
    console.log("PlaceholderHomepage loaded - consider replacing with actual Homepage or redirect.");
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
            <p className="mt-2">This is a placeholder homepage.</p>
            <p className="mt-4">Normally, you'd see your application dashboard here after logging in.</p>
            <Link to="/login" className="mt-6 text-blue-500 hover:underline">Go to Login</Link>
        </div>
    );
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/*
            If your application doesn't have a public homepage and login is the first screen,
            you might want to make LoginPage the index route or redirect to it:
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            For now, assuming a generic landing/index page might exist.
          */}
          <Route path="/" element={<PlaceholderHomepage />} /> {/* Or your actual Homepage component */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;