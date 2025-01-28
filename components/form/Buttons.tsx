"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  //code
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={`${className} capitalize`} size={size}>
      {pending ? <LoaderCircle className="animate-spin" /> : <p>{text}</p>}
    </Button>
  );
};
