import React from "react";

export default function Table(props = {}) {
  const { title, data = [], className, onRowClick = () => {} } = props;
  const headings = Object.keys(data[0]);
  const handleRowClick = (row, e) => {
    e.stopPropagation();
    onRowClick(row.Class);
  };

  return (
    <div className={`table-container ${className}`}>
      {title && <h2>{title}</h2>}
      <table>
        <thead>
          {headings.map(heading => (
            <th key={heading}>{heading}</th>
          ))}
        </thead>
        <tbody>
          {data.map(row => {
            const values = Object.values(row);
            return (
              <tr key={row.name} onClick={e => handleRowClick(row, e)}>
                {values.map(value => (
                  <td>{value}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
