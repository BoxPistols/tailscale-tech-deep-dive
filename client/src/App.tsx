import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Implementation from "./pages/Implementation";
import Comparison from "./pages/Comparison";


function Router() {
  return (
    <Switch>
      {/* より具体的なパスを先に評価し、トップページの包括一致を最後に置く */}
      <Route path="/implementation" component={Implementation} />
      <Route path="/comparison" component={Comparison} />
      <Route path="/404" component={NotFound} />
      <Route path="/" component={Home} />
      {/* 最終フォールバック */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
