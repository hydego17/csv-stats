import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <html>
      <head>
      <title> Match Report </title>
      </head>
      <body>
        <div className="container" >
            <h1> Analysis Output </h1>
            <div> ${report} </div>
        </div>
      </body>
    </html>
    
    `;

    fs.writeFileSync("report.html", html);
  }
}
