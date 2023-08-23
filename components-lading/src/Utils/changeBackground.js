export const changeBackgroundColor = (targetDate, originalBackgroundColor) => {
  const currentTime = new Date();
  if (currentTime >= targetDate) {
    return '#6D37D1';
  } else {
    return originalBackgroundColor;
  }
};