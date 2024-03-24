import React from "react";

const EditHours = (editFormData, handleEditFormChange, handleCancelClick) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="hours"
          require="required"
          placeholder="enter monthly hours..."
          value={editFormData.hours}
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

export default EditHours;
