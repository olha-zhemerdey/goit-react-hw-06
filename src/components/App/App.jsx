import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const App = () => {
  return (
    <>
      <p className={css.title}>Phone Book</p>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
