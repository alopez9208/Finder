"use client";

import { useRouter } from "next/navigation";

const useVerifyCode = () => {  
  const router = useRouter();

  return{
    router
  }
}

export default useVerifyCode;   