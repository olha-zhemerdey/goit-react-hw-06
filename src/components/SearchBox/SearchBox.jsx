import { useState } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
    dispatch(changeFilter(e.target.value.trim().toLowerCase()));
  };

  return (
    <div className={css.wrap}>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          name="search"
          placeholder=""
          value={query}
          onChange={handleChange}
        />
        Find contacts by name
      </label>
    </div>
  );
}
