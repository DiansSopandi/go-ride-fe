'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AuthCallbackForm = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");
    const returnTo = params.get("returnTo");

    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }

    // Default redirect ke /dashboard
    router.replace(returnTo || "/dashboard");
  }, [router]);

  return <p>Signing you in...</p>;
} 

export default AuthCallbackForm