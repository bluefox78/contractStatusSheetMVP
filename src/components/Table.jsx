import React, { Fragment, useState } from "react";
import "../styles/_table.scss";
import data from "../assets/test-data.json";
import AddForm from "./AddForm";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Table = () => {
  // to show current contracts
  const [contracts, setContracts] = useState(data);
  // to add new contracts
  const [addFormData, setAddFormData] = useState({
    projectID: "",
    equipment: "",
    contractNum: "",
    CP: "",
    status: "",
    comment: "",
  });
  // to edit current contracts
  const [editFormData, setEditFormData] = useState({
    projectID: "",
    equipment: "",
    contractNum: "",
    CP: "",
    status: "",
    comment: "",
  });
  // to edit the contract being clicked by their ID
  const [editContractID, setEditContractID] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  //the following code displays the newly added contract to the table
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContract = {
      id: nanoid(),
      projectID: addFormData.projectID,
      equipment: addFormData.equipment,
      contractNum: addFormData.contractNum,
      CP: addFormData.CP,
      status: addFormData.status,
      comment: addFormData.comment,
      hours: addFormData.hours,
    };
    const newContracts = [...contracts, newContract];
    setContracts(newContracts);
  };

  // the following code displays the newly edited contract in the table
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContract = {
      id: editContractID,
      projectID: editFormData.projectID,
      equipment: editFormData.equipment,
      contractNum: editFormData.contractNum,
      CP: editFormData.CP,
      status: editFormData.status,
      comment: editFormData.comment,
    };
    const newContract = [...contracts];
    const index = contracts.findIndex(
      (contract) => contract.id === editContractID
    );
    newContract[index] = editedContract;
    setContracts(newContract);
    setEditContractID(null);
  };
  // the following code shows the previous value in the edit fields instead of showing blank fields during edit
  const handleEditClick = (event, contract) => {
    event.preventDefault();
    setEditContractID(contract.id);
    const formValues = {
      projectID: contract.projectID,
      equipment: contract.equipment,
      contractNum: contract.contractNum,
      CP: contract.CP,
      status: contract.status,
      comment: contract.comment,
    };
    setEditFormData(formValues);
  };

  // the following code shows the previous value in the hours fields instead of showing blank fields during edit
  const handleEditHoursClick = (event, contract) => {
    event.preventDefault();
    setEditContractID(contract.id);
    const formValues = {
      hours: contract.hours,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContractID(null);
  };

  // is this the most efficient way to find and delete the record? I guess once starting using Axiox, I can use axios.delete//
  const handleDeleteClick = (contractID) => {
    const newContracts = [...contracts];
    const index = contracts.findIndex((contract) => contract.id === contractID);
    newContracts.splice(index, 1);
    setContracts(newContracts);
  };

  return (
    <div className="table-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Equipment</th>
              <th>Contract #</th>
              <th>CP</th>
              <th>Status</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <Fragment>
                {editContractID === contract.id ? (
                  <EditableRow
                    // key={contract.id}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    // key={contract.id}
                    contract={contract}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <AddForm
        contract={contracts}
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange}
      />
    </div>
  );
};

export default Table;
