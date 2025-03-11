import { useState } from "react";
import useLoginContent from "./useLoginContent";
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const { setCurrentUser } = useLoginContent();

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/auth/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        setResponse(data);
      } else {
        setCurrentUser(data.profile);
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, error, response };
};
