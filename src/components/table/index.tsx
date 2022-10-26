import React from "react";
import { TableProps } from "../../types/index";
import Accessories from "./accessories";
import { formatDate, handleStatusBackground } from "../../utils/index";
import "./Table.css";

const Table: React.FC<TableProps> = ({ row, data }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {row.map((head: string, idx: number) => {
            return (
              <th key={`head_${idx}`}>
                {head}{" "}
                {idx === 0 || idx === 1 ? (
                  <span className="sort-outer">
                    <span className="sort-inner"></span>
                  </span>
                ) : null}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((user: any, idx: number) => {
          return (
            <tr key={`data+${idx}`}>
              <td>{user.name}</td>
              <td>
                <div className="nft">
                  <img src={user.image} alt="nft_image"></img>
                  <span>{user.nft_text}</span>
                </div>
              </td>
              <td className="description">{user.description}</td>
              <td className="accessories">
                {/* Accesseries Component */}
                <Accessories user={user} idx={idx} />
              </td>
              <td className="status">
                
                <span
                  style={{
                    // Handle bg based on statuss
                    background: handleStatusBackground(user.status),
                  }}
                >
                  {user.status}
                </span>
              </td>
              {/* Formating IsoDate to Long Date */}
              <td>{formatDate(new Date(user.date_claimed))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
