export const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberRegex = new RegExp(/^[0-9]{10}$/);

    const isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);

    if(phoneNumber === "") return null;

    if(!isPhoneNumberValid) return "Numarul trebuie sa fie constituit din 10 cifre.";

    return null;
}