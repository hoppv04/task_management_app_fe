import CommonButton from "@/components/common-button";
import AddNewTask from "@/components/tasks/add-new-task";
import { TaskManagerContext } from "@/context";
import { addNewTaskApi, getAllTaskApi } from "@/services";
import { useContext, useEffect, useState } from "react";

function TaskPage() {
  const { tasks, setTasks, loading, setLoading, user, taskFormData } =
    useContext(TaskManagerContext);
  const [showDialog, setShowDialog] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTaskApi(user?._id);
      if (response?.success) {
        setTasks(response?.tasksList);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) fetchTasks();
  }, [user]);

  const handleSubmit = async (getData) => {
    const response = await addNewTaskApi({ ...getData, userId: user?._id });

    if (response) {
      fetchTasks();
      setShowDialog(false);
      taskFormData.reset();
    }
  };

  return (
    <>
      <div className="mb-5">
        <CommonButton
          onClick={() => setShowDialog(true)}
          buttonText={"Add New Task"}
        />
      </div>
      <div className="mt-5 flex flex-col">
        <div className="">List of tasks</div>
      </div>
      <AddNewTask
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        handleSubmit={handleSubmit}
        taskFormData={taskFormData}
      />
    </>
  );
}

export default TaskPage;
