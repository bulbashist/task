import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect, useState } from "react";

const useAuthWall = (router: AppRouterInstance) => {
  const [authWall, setAuthWall] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      axios
        .post("/api/auth/verify", { token })
        .then(() => setAuthWall(false))
        .catch(() => router.push("/login"));
    }
  }, [router]);

  return authWall;
};

export { useAuthWall };
