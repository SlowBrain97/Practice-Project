import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import AppRoutes from "./utils/RoutesUtils/AppRoutes";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#f5f5f7]">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
export default App;
