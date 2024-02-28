// TODO 'sed'
import chalk from "chalk";
import cluster, { Worker } from "node:cluster";
import {
  cpus as nodeCpus,
  platform as nodePlatform,
  type CpuInfo
} from "node:os";

// TODO split file in 'Yarnode' and 'Fs' (at least)
if (cluster.isPrimary) {
  const platform = nodePlatform();
  const cpus = nodeCpus();
  const workers = cpus.map((_cpu: CpuInfo) => {
    return new Worker({ captureRejections: true });
  });
  console.log(
    chalk.bold("System Info:"),
    chalk.bgWhiteBright.black(platform),
    chalk.bgYellowBright.black(`${workers.length} workers`)
  );
}
