'use client'
import { useActionState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { actionFunction } from "@/utils/type"

const initialState = {
  message : ''
}

const FormContainer = ({action,children}:{action:actionFunction,children:React.ReactNode} ) => {
  const { toast } = useToast()
  const [state,formAction] = useActionState(action,initialState)
  console.log('state ja',state);
  useEffect(() => {
    // code body
    if(state.message){
      console.log('Showing toast with message', state.message);
      toast({description:state.message})
    }
  }, [state,toast] /*dependency if blank = infinity loop */)
  return (
    <form action={formAction}>
      {children}
    </form>
  )
}
export default FormContainer