import FooterComponent from "./components/common/FooterComponent";
import SideBarComponent from "./components/common/SideBarComponent";
import TopNavComponent from "./components/common/TopNavComponent";
import AllRoutes from "./routes/AllRoutes";


function App() {
  return (
    <div className="wrapper">
      <TopNavComponent/>
      <AllRoutes/>
      <SideBarComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
