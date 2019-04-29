interface Status {
  heapTotal: string | number;
  heapUsage: string | number;
  memoryUsage: string | number;
  name: string;
  pid: string | number;
  rss: string | number;
  runId: string | number;
  hostname: string | number;
  load: number[];
  uptime: string | number;
}

export default Status;
