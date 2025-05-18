"use client";

import { useRouter } from "next/navigation";

const useVerifyEmail = () => {
  const router = useRouter();

  return{
    router
  }
}

export default useVerifyEmail;