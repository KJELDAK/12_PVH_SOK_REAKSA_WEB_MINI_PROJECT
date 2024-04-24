'use server'
import { registerService } from "@/service/auth.service";
import { redirect } from "next/navigation";


async function handleRegister(userInfo) {
   
  const newUserInfo = {
    firstname: userInfo.get("firstname"),
    lastname: userInfo.get("lastname"),
    gender: userInfo.get("gender"),
    email: userInfo.get("email"),
    password: userInfo.get("password"),
  };
  console.log("first", newUserInfo);
  const res = await registerService(newUserInfo);
console.log("responseRegister",res)
  if (res.status === 200) {
    redirect("/login")
  }
}
export default handleRegister;