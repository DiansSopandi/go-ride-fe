"use client";

import { config } from "@/config";

// import Cookies from "js-cookie";

export const logout = async () => {
  await fetch(`${config.apiUrl}/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 100)); // delay 1 detik
  return true;
};