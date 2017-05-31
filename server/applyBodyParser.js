/**
 * Created by narendrasisodiya on 31/05/17.
 */

import bodyParser from "body-parser";
export default function applyBodyParser(app) {
  app.use(bodyParser.json());
}
