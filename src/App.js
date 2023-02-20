import "./styles/font.css";
import "./styles/general.css";
import "./styles/App.css";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Form />
      </main>
    </>
  );
};
