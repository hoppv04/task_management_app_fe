import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";
import { TaskManagerContext } from "@/context";
import { getAllTasksApi, updateTaskApi } from "@/services";
import { useContext, useEffect } from "react";

function ScrumBoardPage() {
  const { user, tasks, setTasks, setLoading } = useContext(TaskManagerContext);
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

  const handleDragStart = (e, getTaskId) => {
    e.dataTransfer.setData("id", getTaskId);
  };

  const updateTaskByStatus = async (getTask) => {
    await updateTaskApi(getTask);
    await fetchTasks();
  };

  const handleDrop = (e, getCurrentStatus) => {
    const getDraggedTaskId = e.dataTransfer.getData("id");

    let findCurrentTask = tasks.find(
      (item) => item._id.toString() === getDraggedTaskId
    );

    findCurrentTask = {
      ...findCurrentTask,
      status: getCurrentStatus,
    };

    updateTaskByStatus(findCurrentTask);
  };

  const renderTaskByTaskStatus = () => {
    const taskStatuses = {
      todo: [],
      inProgress: [],
      blocked: [],
      review: [],
      done: [],
    };

    tasks.forEach((taskItem, index) => {
      taskStatuses[taskItem.status].push(
        <div
          key={index}
          onDragStart={
            taskItem.status !== "done"
              ? (e) => handleDragStart(e, taskItem._id)
              : null
          }
          draggable={taskItem?.status !== "done" ? true : false}
        >
          <CommonCard
            extraTextStyles={taskItem?.status === "done" ? "line-through" : ""}
            title={taskItem?.title}
            description={
              scrumBoardOptions.find(
                (boardOption) => boardOption.id === taskItem?.status
              ).label
            }
          />
        </div>
      );
    });

    return taskStatuses;
  };

  useEffect(() => {
    if (user !== null) fetchTasks();
  }, [user]);
  return (
    <>
      <div className="grid grid-cols-5 gap-2 h-full">
        {scrumBoardOptions.map((item) => (
          <div
            className="border border-[#333333] rounded overflow-auto"
            key={item.id}
            onDrop={(e) => handleDrop(e, item.id)}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="px-1 py-3 text-center bg-black border-none mb-3">
              <h3 className="text-xl font-bold text-white">{item.label}</h3>
            </div>
            <div className="p-3 flex flex-col gap-4">
              {renderTaskByTaskStatus()[item.id]}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ScrumBoardPage;
