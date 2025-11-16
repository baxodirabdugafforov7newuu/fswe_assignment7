/* eslint-env node */

import Express from 'express';
import addTranscriptServerRoutes from './transcriptServer';
import * as db from './transcriptManager';

const app = Express();
const inputPort = process.env.PORT || 4001;

function initializeServer() {
  db.initialize();
  console.log('Initial list of transcripts:');
  console.log(db.getAll());
  console.log(`Express server now listening on localhost:${inputPort}`);
}

addTranscriptServerRoutes(app);

app.listen(inputPort, initializeServer);
