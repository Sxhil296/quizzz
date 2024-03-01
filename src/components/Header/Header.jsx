import { Button } from "@/components/ui/button";
import React from "react";
import { GitHub } from "react-feather";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  return (
    <header className="bg-transparent dark:border-white dark:text-white w-full border-b-2 border-black py-2">
    <div className="container mx-auto flex items-center justify-between">
    <div className="text-2xl font-medium dark:text-white"><Link to='/'>Quizzz</Link></div>
      <div className="flex gap-4">
       <Button >
       <DropdownMenu variant="outline">
          <DropdownMenuTrigger>Quizzes</DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <Link to="/prophets-quiz">Prophets Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/quran-quiz">Quran Quiz</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/history-quiz">History Quiz</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
       </Button>

        <Link>
          <Button variant="outline">
            <GitHub />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
    </header>
  );
};

export default Header;
