import CommonForm from "@/components/common-form";
import { useToast } from "@/components/ui/use-toast";
import { signInFormControls } from "@/config";
import { callLoginUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (getData) => {
    try {
      const data = await callLoginUserApi(getData);
      if (data?.success) {
        toast({
          title: data.message,
          description: "Welcome",
        });
        navigate("/tasks/list");
      } else {
        toast({
          title: data.message,
          description: "Please try again",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: error.response.data.message,
        description: "Some error occurred",
      });
    }
  };
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
