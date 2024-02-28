import _ from "lodash";
import { exec as cpExec } from "child_process";
import { promisify } from "util";

import type { ObjectEncodingOptions } from "fs";

const exec = promisify(cpExec);

type TArgument = string;
type TPackageName = string;
type TVersion = string;

enum EPackageTag {
  "Cli",
  "Husky",
  "Next",
  "Storybook",
  "Types"
}
enum EProgram {
  "Add" = "yarn add",
  "Install" = "yarn",
  "Npx" = "npx",
  "Remove" = "yarn remove"
}

interface Yarn {
  add: (props: IPackage) => Promise<void>;
  install: () => Promise<void>;
  remove: (props: IPackage) => Promise<void>;
}
interface IPackage {
  args?: TArgument[];
  name: TPackageName;
  program: EProgram;
  tags: EPackageTag[];
  version?: TVersion;

  isDev?: boolean;
  isPrerequisite?: boolean;
  useNpx?: boolean;
}

const Fs = () => {
  const commonOptions: ObjectEncodingOptions = { encoding: "utf8" };

  return {
    // TODO { cwd = __dirname,  }
    // TODO cli arguments, e.g. '-la'
    ls: async () => {
      try {
        const { stdout, stderr } = await exec("ls", { ...commonOptions });
        if (stderr) throw stderr;
        console.log(stdout);
      } catch (error) {
        console.error("❌", error);
      }
    }
  };
};

const PACKAGES: IPackage[] = [
  // Tag: cli
  { name: "chalk", program: EProgram.Add, tags: [EPackageTag.Cli] },
  { name: "chalk-animation", program: EProgram.Add, tags: [EPackageTag.Cli] },
  { name: "figlet", program: EProgram.Add, tags: [EPackageTag.Cli] },
  { name: "gradient-string", program: EProgram.Add, tags: [EPackageTag.Cli] },
  { name: "inquirer", program: EProgram.Add, tags: [EPackageTag.Cli] },
  { name: "nanospinner", program: EProgram.Add, tags: [EPackageTag.Cli] },
  { name: "yargs", program: EProgram.Add, tags: [EPackageTag.Cli] },

  // Tag: next
  {
    args: [
      "--eslint",
      "--experimental-app",
      "--import-alias '@/*'",
      "--src-dir",
      "--tailwind",
      "--ts"
    ],
    name: `next@v13.2.5-canary.12`,
    program: EProgram.Add,
    tags: [EPackageTag.Next],
    version: "v13.2.5-canary.12",

    useNpx: true
  },

  // Tag: @types
  {
    name: "@types/chalk-animation",
    program: EProgram.Add,
    tags: [EPackageTag.Types],
    isDev: true
  },
  {
    name: "@types/figlet",
    program: EProgram.Add,
    tags: [EPackageTag.Types],
    isDev: true
  },
  {
    name: "@types/inquirer",
    program: EProgram.Add,
    tags: [EPackageTag.Types],
    isDev: true
  },
  {
    name: "@types/yargs",
    program: EProgram.Add,
    tags: [EPackageTag.Types],
    isDev: true
  }
];

// TODO extract messages to useMessage() hook
function PM() {
  const execCmd = async ({
    args = [],
    name,
    version,
    isDev = false,
    program
  }: IPackage) => {
    const maybeVersion = version ? `@${version}` : "";
    const argsString = args.join(" ") || "";
    const cmd = `${program} ${
      isDev ? "-D " : ""
    }${name}${maybeVersion}${argsString}`;

    try {
      const { stderr } = await exec(cmd);
      if (stderr) throw stderr;
      console.log("✅", cmd);
    } catch (error) {
      console.log("❌", cmd);
      console.error(error);
    }
  };

  return {
    add: async (props: IPackage) => {
      execCmd(props);
    },
    install: async (props: IPackage) => {
      execCmd({ ...props });
    },
    remove: async ({ name }: IPackage) => {
      const cmd = `yarn remove ${name}`;

      try {
        const { stderr } = await exec(cmd);
        if (stderr) throw stderr;
        console.log("✅", cmd);
      } catch (error: any) {
        console.log("❌", cmd);
        console.error(error.message);
      }
    }
  } as Yarn;
}

const { ls } = Fs();
const pm = PM();

export { PACKAGES, pm, ls };

export type { IPackage, Yarn };
