import CommonForm from "@/components/common-form";
import { useToast } from "@/components/ui/use-toast";
import { signUpFormControls } from "@/config";
import { callRegisterUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (getData) => {
    try {
      const data = await callRegisterUserApi(getData);
      console.log(data);

      if (data?.success) {
        toast({
          title: data.message,
          description: "Welcome",
        });
        navigate("/tasks/list");
      }
    } catch (error) {
      toast({
        title: error.response.data.message,
        description: "Some error occurred",
      });
    }
  };

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
