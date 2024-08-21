import CommonDialog from "@/components/common-dialog";
import { addNewTaskFormControls } from "@/config";

function AddNewTask({
  showDialog,
  setShowDialog,
  handleSubmit,
  taskFormData,
  currentTaskEditedId,
  setCurrentTaskEditedId,
}) {
  return (
    <CommonDialog
      formControls={addNewTaskFormControls}
      showDialog={showDialog}
      handleOpenChange={() => {
        setShowDialog(false);
        currentTaskEditedId ? taskFormData.reset() : null;
        setCurrentTaskEditedId(null);
      }}
      title={currentTaskEditedId !== null ? "Edit Task" : "Post New Task"}
      btnText={"Add"}
      handleSubmit={handleSubmit}
      formData={taskFormData}
    />
  );
}

export default AddNewTask;
