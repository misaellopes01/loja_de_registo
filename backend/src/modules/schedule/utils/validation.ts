export function validateBI(inputStr: string): boolean {
  const pattern = /^\d{9}[a-zA-Z]{2}\d{3}$/;
  return pattern.test(inputStr);
}
export function validatePhoneNumber(inputStr: string): boolean {
  const pattern = /^(92|93|94|91|99|95)\d{7}$/;
  const validate = pattern.test(inputStr);
  const number = !isNaN(Number(inputStr));
  if (validate && number) {
    return true;
  } else {
    return false;
  }
}
