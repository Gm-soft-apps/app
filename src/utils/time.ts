"use server"

export const DDMMYYYY = async (date: Date) => {
    // return new Date(date).toLocaleDateString()
    return new Date(date).toDateString();
}