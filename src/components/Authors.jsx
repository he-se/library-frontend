import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_AUTHORS, ALL_BOOKS } from "../queries";

const Authors = (props) => {
  if (!props.show) {
    return null;
  }

  const result = useQuery(ALL_AUTHORS);
  const [errorMessage, setErrorMessage] = useState(null);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const authors = result.data.allAuthors;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
