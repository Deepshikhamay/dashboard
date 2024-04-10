import "./App.css";
import Nav from "./components/nav";
import Head from "./components/head";
import InviteUser from "./components/inviteUser";
import Plans from "./components/plans";
function App() {
  return (
    <div>
      <Nav />
      <Head />
      <InviteUser />
      <Plans />
    </div>
  );
}

export default App;
