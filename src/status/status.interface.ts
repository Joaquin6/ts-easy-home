interface Status {
  heapTotal: number;
  heapUsage: number;
  memoryUsage: number;
  name: string;
  pid: number;
  rss: number;
  runId: string;
  hostname: string;
  load: number[];
  uptime: number;
}

export default Status;
