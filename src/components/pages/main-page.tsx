import React from "react";
import useFetchData, { Tag } from "../../hooks/useFetchData";

export const SomeComponent: React.FC = () => {
  const { data: tags, loading, error } = useFetchData<Tag>("2", "20");

  if (loading) {
    return <p>Ładowanie...</p>;
  }

  if (error) {
    return <p>Błąd: {error}</p>;
  }

  return (
    <div>
      <h1>Popularne tagi na Stack Overflow</h1>
      <ol>
        {tags?.map((tag, index) => (
          <li key={index}>
            <strong>{tag.name}</strong> - Liczba wystąpień: {tag.count}
          </li>
        ))}
      </ol>
    </div>
  );
};
