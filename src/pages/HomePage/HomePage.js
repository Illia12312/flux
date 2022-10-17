import { useEffect, useState } from "react";
import { CharactersList } from "./CharactersList/CharactersList";
import { useStore } from "../../store/useStore";
import { deleteAction, saveAction } from "../../store/actions";

export const HomePage = () => {
  const [state, dispatch] = useStore({data:[]});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchAction(data.result))
      });
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAction(id))
  };

  const handleSave = (id, name) => {
    dispatch(saveAction(id, name));
  };

  return (
    <main>
      <section>
        <CharactersList
          handleDelete={handleDelete}
          handleSave={handleSave}
          list={state.data}
        />
      </section>
    </main>
  );
};
