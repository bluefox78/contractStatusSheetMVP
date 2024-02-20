import React from "react";
import ContractHoursModal from "../modals/ContractHoursModal";
import { useState } from "react";

const ReadOnlyRow = ({ contract, handleEditClick, handleDeleteClick }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <tr key={contract.id}>
        <td>{contract.projectID}</td>
        <td>{contract.equipment}</td>
        <td>{contract.contractNum}</td>
        <td>{contract.CP}</td>
        <td>{contract.status}</td>
        <td>{contract.comment}</td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, contract)}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(contract.id)}>
            Delete
          </button>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Add Hours
          </button>
        </td>
      </tr>
      <ContractHoursModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        contract={contract}
      />
    </>
  );
};

export default ReadOnlyRow;
