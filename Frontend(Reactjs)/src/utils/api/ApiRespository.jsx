const url = "http://localhost:8080/api";

export const createApi = async (value) => {
  const response = await fetch("http://localhost:8080/api/createStudent", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: value,
  });
  const value2 = await response.json();
  console.log(value2);
  return value2;
};

export const getAllApi = async () => {
  const response = await fetch(`${url}/allStudents`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const value2 = await response.json();
  return value2;
};

export const searchApi = async (path, value) => {
  const response = await fetch(`${url}/${path}/${value}`);
  if (!response.ok) {
    throw new Error(response);
  }
  return response.json();
};
export const updateApi = async (value) => {
  const response = await fetch(`${url}/updateStudent`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    body: value,
  });
  if (!response.ok) {
    throw new Error(response);
  }
  return await response.json();
};

export const deleteApi = async (id) => {
  const response = await fetch(`${url}/${id}/deleteStudent`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(id),
  });
  const result = response.json();
  return result;
};

export const settingApi = async (newStudent) => {
  const response = await fetch(`${url}/settingStudent`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newStudent),
  });
  const result = await response.json();
  return result;
};
