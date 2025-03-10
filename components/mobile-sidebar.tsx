import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Description } from "@radix-ui/react-dialog";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <VisuallyHidden>
          <SheetTitle>Sidebar</SheetTitle>
          <Description>Sidebar</Description>
        </VisuallyHidden>
        
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
