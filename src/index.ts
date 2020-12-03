import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

// Create an object that statisfies the "DataReader" insterface
const csvReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something that stisfying the "DataReader" interface
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
