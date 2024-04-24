import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { deleteWorkspace, getAllWorkspace } from "@/service/workspace.service";
export default async function todoList() {
    const workSpace = await getAllWorkspace();

    return <main>
         <div className="flex ">
        <div className=" w-[20%]"><SidebarComponent props={workSpace}/></div>
          <div className="w-[80%]"><NavbarComponent/> <ListBoardComponentHeader/></div>
          
        </div>
    </main>;
  }