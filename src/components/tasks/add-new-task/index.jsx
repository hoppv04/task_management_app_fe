import CommonDialog from "@/components/common-dialog";
import { addNewTaskFormControls } from "@/config";

function AddNewTask({ showDialog, setShowDialog, handleSubmit, taskFormData }) {
  return (
    <CommonDialog
      formControls={addNewTaskFormControls}
      showDialog={showDialog}
      setShowDialog={setShowDialog}
      title={"Post New Task"}
      btnText={"Add"}
      handleSubmit={handleSubmit}
      formData={taskFormData}
    />
  );
}

export default AddNewTask;
