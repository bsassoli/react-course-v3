import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import customFetch from "./utils";
import { toast } from "react-toastify";


export const useFetchTasks = () => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const { data } = await customFetch.get("/");
            return data;
        }
    });

    return { isLoading, isError, error, data };
};

export const useEditTask = () => {
    const queryClient = useQueryClient();
    const { mutate: editTask } = useMutation({
        mutationFn: (item) => {
            const editedItem = { ...item, isDone: !item.isDone };
            return customFetch.patch(`/${item.id}`, editedItem);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
        }

    })
    return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isPending: deleteTaskLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
  return { deleteTask, deleteTaskLoading };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task added');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isPending };
};
