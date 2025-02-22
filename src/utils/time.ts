"use server"

export const DDMMYYYY = async (date: Date) => {
    const accDate = new Date(date);
    return accDate.getDate() + "/" + (accDate.getMonth() + 1) + "/" + accDate.getFullYear();
}