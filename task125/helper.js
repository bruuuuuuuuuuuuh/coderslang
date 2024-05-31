export const getBMICategory = (bmi) => {
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (18.5 < bmi && bmi < 25) {
    return "Normal weight";
  } else if (25 <= bmi && bmi < 30) {
    return "Overweight";
  } else if (bmi >= 30) {
    return "Obesity";
  }
}