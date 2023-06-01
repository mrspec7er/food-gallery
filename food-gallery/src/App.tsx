import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryCliet = new QueryClient();
  return (
    <QueryClientProvider client={queryCliet}>
      <Header />
    </QueryClientProvider>
  );
}

export default App;

function Header() {
  return (
    <div>
      <p>Header</p>
    </div>
  );
}
