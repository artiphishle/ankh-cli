const DIR = { pkgs: "packages", apps: "apps" };
const CMD = process.env.pm || "pnpm";
const PM = {
  add: (pkg: string) => `${CMD} add ${pkg}`,
  init: () => `${CMD} init`,
  install: () => `${CMD} i`,
  remove: (pkg: string) => `${CMD} remove ${pkg}`,
  store: { prune: () => `${CMD} store prune` }
};

// [1] Install pkgs
const commands = [
  // global
  `${CMD} add -g meta`,

  // local
  `${CMD} add `,

  // meta pkgs
  `mkdir ${DIR.pkgs} && cd ${DIR.pkgs}`,
  `${CMD}`,

  // meta apps
  `mkdir ${DIR.apps} && cd ${DIR.apps}`,
  `${CMD}`,
  ``,
  ``
];

// [3] Prompt to create or import pkgs
// Inquirer
