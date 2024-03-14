import { dataWorks } from "./data/dataWorks";

import { Badge } from "./components/badge";
import Title from "./components/title";

import { ReactOriginal } from "devicons-react";
import { AngularOriginal } from "devicons-react";
import { NextjsOriginalWordmark } from "devicons-react";
import { SpringOriginal } from "devicons-react";
import { MysqlPlainWordmark } from "devicons-react";
import { PostgresqlOriginal } from "devicons-react";
import { DockerOriginalWordmark } from "devicons-react";
import { ExpressOriginalWordmark } from "devicons-react";

import { Suspense } from "react";
import Skeleton from "./components/skeleton";
import Works from "./components/works";

export default function Home() {
  return (
    <div>
      <Title name="hey, I'm jeusa 👋" />
      <p className="text-gray-700 leading-loose font-light">
        Software developer, optimist and application builder. Recently completed
        a successful internship at{" "}
        <Badge href="https://cl.nttdata.com/">
          <img src="nttdata.svg" width={20} />
          NTT DATA
        </Badge>
        , I like to develop in{" "}
        <Badge href="https://cl.nttdata.com/">
          <img src="react.svg" width={12} className="mr-1" />
          React
        </Badge>
        , expanding my skillset with{" "}
        <Badge href="https://cl.nttdata.com/">
          <img src="next.svg" width={12} className="mr-1" /> Next
        </Badge>{" "}
        and currently learning{" "}
        <Badge href="https://cl.nttdata.com/">
          <img src="angular.svg" width={12} className="mr-1" />
          Angular
        </Badge>{" "}
        to further enhance my abilities.
      </p>

      <div className="pt-4">
        <h2>Works ❤️</h2>

        <Suspense fallback={<p>loading...</p>}>
          <Works />
        </Suspense>
        <p className="text-gray-700 leading-loose font-light pt-4">
          I'm passionate about open-source development, actively supporting
          various projects, and immersing myself in a plethora of programming
          resources. I thoroughly enjoy exploring web pages, dissecting code,
          delving into insightful blogs, and enriching my knowledge through
          programming-related videos.{" "}
        </p>

        <p className="text-gray-700 leading-loose font-light pt-4">
          "Here are a few technologies I've experimented with"
        </p>
        <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <ReactOriginal size={30} />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <AngularOriginal size={30} />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <NextjsOriginalWordmark size={50} />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <SpringOriginal size={30} />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <ExpressOriginalWordmark size={50} />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <PostgresqlOriginal size={30} />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <MysqlPlainWordmark size={50} />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <DockerOriginalWordmark size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
