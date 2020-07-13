export const isAdult = (age) => {
  if (age > 18) return true;
  else return false;
};

export const canDrink = (age) => {
  if (age > 18) return true;
  else return false;
};

export default (age) => age >= 67;
