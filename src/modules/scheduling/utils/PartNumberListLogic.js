const PartNumberListLogic = {
  groupPartNumbersByLine(partNumbers) {
    return partNumbers.reduce((acc, part) => {
      if (!acc[part.partLine]) {
        acc[part.partLine] = [];
      }
      acc[part.partLine].push(part);
      return acc;
    }, {});
  },

  getAvailablePartNumbers(allPartNumbers, currentLinePartNumbers) {
    return allPartNumbers.filter(
      (part) =>
        !currentLinePartNumbers.some(
          (linePart) => linePart.partNumber === part.partNumber
        )
    );
  },

  addPartNumberToLine(groupedPartNumbers, productionLine, partNumber) {
    return {
      ...groupedPartNumbers,
      [productionLine]: [...groupedPartNumbers[productionLine], partNumber],
    };
  },

  removePartNumberFromLine(
    groupedPartNumbers,
    productionLine,
    partNumberToRemove
  ) {
    return {
      ...groupedPartNumbers,
      [productionLine]: groupedPartNumbers[productionLine].filter(
        (part) => part.partNumber !== partNumberToRemove.partNumber
      ),
    };
  },
};

export default PartNumberListLogic;
