import { Label } from "../ui/label"
import { Input } from "../ui/input"

type FormInputProps = {
    name:string
    type:string
    //optional
    label?:string
    defaultValue?:string
    placeholder?:string
}

const FormInput = (props: FormInputProps) => {
    const { name,type,label,defaultValue,placeholder } = props
    
  return (
    <div className="mb-2">
        <Label htmlFor={name}>{label}</Label>
        <Input 
            name="firstName" 
            type={type} 
            placeholder={placeholder} defaultValue={defaultValue}/>
    </div>
  )
}
export default FormInput