import { postWorkspace } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";


async function handleWorkspace(workSpaceInfo) {
  "use server";
  console.log("workSpaceInfo ", workSpaceInfo);
  const newWorkspaceInfo = {
    workspaceName: workSpaceInfo.get("workspaceName"),
  };
  console.log("first", newWorkspaceInfo);
  const res = await postWorkspace(newWorkspaceInfo);
  revalidateTag('workspace');
  console.log("responseRegister", res);

}
export default handleWorkspace;
