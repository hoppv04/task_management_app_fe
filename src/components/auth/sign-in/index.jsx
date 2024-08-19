import CommonForm from "@/components/common-form";
import { signInFormControls } from "@/config";
import { useForm } from "react-hook-form";

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <>
      <CommonForm
        buttonText={"Sign In"}
        handleSubmit={handleSubmit}
        formControls={signInFormControls}
        form={formData}
      />
    </>
  );
}

export default SignIn;
