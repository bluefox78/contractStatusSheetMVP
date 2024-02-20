import * as React from "react";
import CloseIcon from "../assets/icons/closeIcon.png";
import "../styles/_modal.scss";

const ContractHoursModal = ({ open, onClose, contract }) => {
  if (!open) return null;

  // const [month, setMonth] = useState();
  // const [hour, setHour] = useState();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const monthsToShow = 12; // number of month to display
  const column = [];

  for (let i = 0; i < monthsToShow; i++) {
    const nextMonthIndex = (currentMonthIndex + i) % 12; // Ensure it doesn't exceed 12
    // first nextMonthIndex is always the current month
    const year =
      currentDate.getFullYear() + Math.floor((currentMonthIndex + i) / 12); // Increment year if needed
    const monthName = monthNames[nextMonthIndex];
    column.push(monthName + " " + year);
  }

  const combineMonthContractHour = (obj, arr) => {
    const combinedObject = {};
    // Iterate over the array
    arr.forEach((key) => {
      // Check if the key exists in the object
      if (obj.hasOwnProperty(key)) {
        // Add the key-value pair to the combined object
        combinedObject[key] = obj[key];
      }
    });
    return combinedObject;
  };

  // Combine object and array
  const combined = combineMonthContractHour(contract.hours, column);
  console.log(combined);
  // console.log(contract.id);
  // console.log(contract.hours);
  // console.log(column);

  return (
    <>
      <modal className="modal">
        <div className="modal_topLayer">
          <h2>Enter your hours per month for this contract:</h2>
          <p>
            {contract.projectID}_{contract.equipment}_{contract.contractNum}
          </p>
          <table>
            {/* <thead>
              <tr>
                <th>{column[0]}</th>
                <th>{column[1]}</th>
                <th>{column[2]}</th>
                <th>{column[3]}</th>
                <th>{column[4]}</th>
                <th>{column[5]}</th>
                <th>{column[6]}</th>
                <th>{column[7]}</th>
                <th>{column[8]}</th>
                <th>{column[9]}</th>
                <th>{column[10]}</th>
                <th>{column[11]}</th>
              </tr>
            </thead> */}
            <tbody>
              <tbody>
                <tr>
                  {Object.entries(combined).map(([monthYear, value]) => (
                    <td key={monthYear}>{monthYear}</td>
                  ))}
                </tr>
                <tr>
                  {Object.entries(combined).map(([monthYear, value]) => (
                    <td key={monthYear}>{value}</td>
                  ))}
                </tr>
              </tbody>
            </tbody>
          </table>
          <img
            className="closeIcon"
            src={CloseIcon}
            alt="close button"
            onClick={onClose}
          />
        </div>
      </modal>
    </>
  );
};

export default ContractHoursModal;
