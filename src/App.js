
import "./styles/App.css";

import { Header } from "./components/Header/Header";
import { Section } from "./components/Section";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Section />
        <Form />
      </main>
    </>
  );
};
