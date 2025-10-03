import Input from "./components/Input/Input";
import "./App.css";
import Toast from "./components/Toast/Toast";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

function App() {
  return (
    <>
      <div className="main">
        <Input
          Input={{
            id: "1",
            title: "text",
            type_password: false,
            cleareble: true,
          }}
        />
        <SidebarMenu />
        <Toast Toast={{ id: "1", message: "Done" }} />
      </div>
    </>
  );
}

export default App;
