import { useContext } from "react";
import CommonForm from "../common-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { TaskManagerContext } from "@/context";

function CommonDialog({
  showDialog,
  setShowDialog,
  title,
  formControls,
  formData,
  handleSubmit,
  btnText,
}) {
  const { taskFormData } = useContext(TaskManagerContext);
  return (
    <Dialog
      open={showDialog}
      onOpenChange={() => {
        setShowDialog(false);
        taskFormData.reset();
      }}
    >
      <DialogContent className="sm:max-w-screen h-[450px] overflow-auto">
        <DialogTitle>{title}</DialogTitle>
        <div>
          <CommonForm
            formControls={formControls}
            form={formData}
            handleSubmit={handleSubmit}
            buttonText={btnText}
          />
        </div>
        <DialogDescription />
      </DialogContent>
    </Dialog>
  );
}

export default CommonDialog;
