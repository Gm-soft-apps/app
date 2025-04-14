export const maskPhoneNumber = (phone) => {
    return phone.slice(0, 2) + "XXXXXX" + phone.slice(-2)
}