import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { GitHub } from "react-feather";

const Home = () => {
  return (
    <div className="max-w-[750px]  mx-auto p-8 flex flex-col items-center sm:justify-center  sm:mt-10 text-justify gap-2">
      <h2 className="text-xl font-medium dark:text-gray-400">Welcome to</h2>
      <h1 className="font-bold text-4xl sm:text-6xl mb-2 sm:mb-4">Quizzz</h1>
      <p className="mb-4 font-medium dark:text-gray-400">
        Quizzz is a purposeful and enlightening web application designed to help
        Muslims test and enhance their knowledge about Islam. This platform
        offers a variety of quizzes related to Prophets, Quran, Islamic History,
        etc. With a focus on education and self-improvement, Quizzz is here to
        help you enhance your knowledge of Islam.
      </p>
      <div className="sm:mt-4">
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 sm:gap-4 flex-1 ">
            <p className="font-medium dark:text-gray-400">
              Test your knowledge on various topics related to{" "}
              <span className="dark:text-white underline">Islam</span>. Quizzz
              offers quizzes on prophets, Quran, history, and more. Challenge
              yourself and learn!
            </p>
            <div className="flex flex-col gap-2 flex-1">
              <Button>
                <Link to="/prophets-quiz">Prophets Quiz</Link>
              </Button>
              <Button>
                <Link to="/quran-quiz">Quran Quiz</Link>
              </Button>
              <Button>
                <Link to="/history-quiz">History Quiz</Link>
              </Button>
            </div>
          </div>
          <p className="font-medium dark:text-gray-400 mt-4 mb-2">
            Quizzz is a developed with ReactJS, TailwindCSS, and Shacdn. While
            some questions may require refinement, Quizzz welcomes contributions
            from users to enhance its content. Feel free to contribute and help
            make Quizzz a more comprehensive and accurate resource for learning
            about Islam
          </p>
          <Button variant="secondary">
            <Link to="https://github.com/Sxhil296/quizzz">
              Make it better on&nbsp; <GitHub className="inline" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
