import CommonButton from "@/components/common-button";
import AddNewTask from "@/components/tasks/add-new-task";
import TaskItem from "@/components/tasks/task-item";
import { Skeleton } from "@/components/ui/skeleton";
import { TaskManagerContext } from "@/context";
import {
  addNewTaskApi,
  deleteTaskApi,
  getAllTasksApi,
  updateTaskApi,
} from "@/services";
import { useContext, useEffect, useState } from "react";

function TaskPage() {
  const {
    tasks,
    setTasks,
    loading,
    setLoading,
    user,
    taskFormData,
    currentTaskEditedId,
    setCurrentTaskEditedId,
  } = useContext(TaskManagerContext);
  const [showDialog, setShowDialog] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTasksApi(user?._id);
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
    const response =
      currentTaskEditedId !== null
        ? await updateTaskApi({
            ...getData,
            _id: currentTaskEditedId,
            userId: user?._id,
          })
        : await addNewTaskApi({ ...getData, userId: user?._id });

    if (response) {
      fetchTasks();
      setShowDialog(false);
      taskFormData.reset();
      setCurrentTaskEditedId(null);
    }
  };

  const handleDeleteTask = async (getCurrentTaskId) => {
    const response = await deleteTaskApi(getCurrentTaskId);
    if (response?.success) {
      fetchTasks();
    }
  };

  if (loading)
    return (
      <Skeleton
        className={"w-full h-[550px] rounded-[6px] bg-black opacity-50"}
      />
    );

  return (
    <>
      <div className="mb-5">
        <CommonButton
          onClick={() => setShowDialog(true)}
          buttonText={"Add New Task"}
        />
      </div>
      <div className="mt-5 flex flex-col">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tasks?.length > 0 ? (
            tasks.map((taskItem, index) => (
              <TaskItem
                item={taskItem}
                key={index}
                handleDeleteTask={handleDeleteTask}
                setShowDialog={setShowDialog}
                setCurrentTaskEditedId={setCurrentTaskEditedId}
                taskFormData={taskFormData}
              />
            ))
          ) : (
            <h1>No tasks added! Please add one</h1>
          )}
        </div>
      </div>
      <AddNewTask
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        handleSubmit={handleSubmit}
        taskFormData={taskFormData}
        currentTaskEditedId={currentTaskEditedId}
        setCurrentTaskEditedId={setCurrentTaskEditedId}
      />
    </>
  );
}

export default TaskPage;
