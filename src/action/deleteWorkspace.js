"use server"

import { deleteWorkspace } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

async function deleteWorkspaceAction (workspaceId) {
    await deleteWorkspace(workspaceId);
    revalidateTag('workspace');
}

export default deleteWorkspaceAction;