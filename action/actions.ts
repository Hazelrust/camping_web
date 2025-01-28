'use server'
import { profileSchema, validateWithZod } from "@/utils/schemas";

const renderError = (error:unknown):{message:string} => {
    // code body
    return {
        message:error instanceof Error ? error.message : 'An error!!!'
    }
}

export const createProfileAction = async (prevState: unknown, formData: FormData) => {
    try {
        // const firstName = formData.get("firstName") as string;
        const rawData = Object.fromEntries(formData)
        const validatedField = validateWithZod(profileSchema, rawData)
        console.log('validated', validatedField);

        // Validation

        // Add to db

        //return
        return { message: 'Create Profile Success!' }

    } catch (error) {
        console.log(error);
        return renderError(error)
    }
};