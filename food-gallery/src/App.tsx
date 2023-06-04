import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
function App() {
  const queryCliet = new QueryClient();
  return (
    <QueryClientProvider client={queryCliet}>
      <Header />
      <Carousel />
      <Content />
    </QueryClientProvider>
  );
}

export default App;
