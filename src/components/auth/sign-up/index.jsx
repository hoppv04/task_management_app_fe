import CommonForm from "@/components/common-form";
import { signUpFormControls } from "@/config";
import { useForm } from "react-hook-form";

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {};

  return (
    <>
      <CommonForm
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signUpFormControls}
        buttonText={"Sign Up"}
      />
    </>
  );
}

export default SignUp;
