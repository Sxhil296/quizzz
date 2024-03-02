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
    <header className="bg-white dark:bg-[#0a0711] fixed top-0 dark:border-white dark:text-white w-full border-b-2 border-black py-2 px-0">
      <div className="container mx-auto flex items-center justify-between px-2">
        <div className="sm:text-2xl text-xl font-medium dark:text-white">
          <Link to="/">Quizzz</Link>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <Button>
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

          <Link to="https://github.com/Sxhil296/quizzz">
            <Button variant="outline" className="hidden sm:block">
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
