import { requestAPI } from "./core";

export const createTodo = async (title: string) => {
  try {
    const response = await requestAPI.post("", {
      title,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async () => {
  try {
    const response = await requestAPI.get("");
    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

export const editTodo = async (
  todoId: string,
  title: string,
  done: boolean
) => {
  try {
    const response = await requestAPI.put(`/${todoId}`, {
      title,
      done,
    });
    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};
