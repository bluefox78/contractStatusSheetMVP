import React from 'react'

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
