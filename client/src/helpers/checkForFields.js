export const checkForFields = (...texts) => {
  for (let i = 0; i < texts.length; i++) {
    if (texts[i].trim() == "") {
      return false;
    }
  }

  return true;
};
