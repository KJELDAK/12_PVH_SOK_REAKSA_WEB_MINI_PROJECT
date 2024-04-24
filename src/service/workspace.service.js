// import { authOption } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";

// const session = await getServerSession(authOption);
//get all workspace
export const getAllWorkspace = async (userInfo) => {
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
        cache: "no-store",
        next: {tags: ['workspace']},
      headers: {
        Authorization:` Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcmVha3NhNDkyQGdtYWlsLmNvbSIsImlhdCI6MTcxMzk2ODI2NCwiZXhwIjoxNzEzOTg2MjY0fQ.g4n7509A-raKR0mIUs06i5QFx2qu4i-kTZDYSmQJ238`
      },
    });
    const data = await res.json();
    // console.log("data ", data)
    return data;
  };
  //post workspace
  export const postWorkspace = async (userInfo) => {
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
      
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization:` Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcmVha3NhNDkyQGdtYWlsLmNvbSIsImlhdCI6MTcxMzk2ODI2NCwiZXhwIjoxNzEzOTg2MjY0fQ.g4n7509A-raKR0mIUs06i5QFx2qu4i-kTZDYSmQJ238`
      },
    });
    const data = await res.json();
    return data;
  };
  //delete workspace
  export const deleteWorkspace = async (workspaceId) => {
    
    await fetch(` http://110.74.194.123:8989/api/todo/v1/workspaces/${workspaceId} `, {
      
      method: "DELETE",
    //   body: JSON.stringify(workspaceId),
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcmVha3NhNDkyQGdtYWlsLmNvbSIsImlhdCI6MTcxMzk2ODI2NCwiZXhwIjoxNzEzOTg2MjY0fQ.g4n7509A-raKR0mIUs06i5QFx2qu4i-kTZDYSmQJ238`
      },
    });
  };
//edit workspace
export const editWorkspace = async (workspaceId) =>{
    await fetch(` http://110.74.194.123:8989/api/todo/v1/workspaces/${workspaceId} `, {
      
      method: "PUT",
      body: JSON.stringify(workspaceId),
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcmVha3NhNDkyQGdtYWlsLmNvbSIsImlhdCI6MTcxMzk2ODI2NCwiZXhwIjoxNzEzOTg2MjY0fQ.g4n7509A-raKR0mIUs06i5QFx2qu4i-kTZDYSmQJ238`
      },
    });

}