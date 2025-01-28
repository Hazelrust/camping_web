import { z, ZodSchema } from 'zod'

// const profileSchema = z.string().min(2,{message:"Input must be at least 2 characters long."})
export const profileSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long." }),
    userName: z.string().min(2, { message: "Username must be at least 2 characters long." })
})


export const validateWithZod = <T>(
    schema: ZodSchema<T>, 
    data :unknown):T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        // failed
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}