import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="projectID"
          require="required"
          placeholder="enter project ID..."
          value={editFormData.projectID}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="equipment"
          require="required"
          placeholder="enter equpipment..."
          value={editFormData.equipment}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="contractNum"
          require="required"
          placeholder="enter contract number or PO..."
          value={editFormData.contractNum}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="CP"
          require="required"
          placeholder="enter CP name..."
          value={editFormData.CP}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="status"
          require="required"
          placeholder="enter contract status..."
          value={editFormData.status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="comment"
          require="required"
          placeholder="enter comment..."
          value={editFormData.comment}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
