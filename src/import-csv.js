import fs from 'node:fs';
import { parse } from 'csv-parse';

const csvPath = new URL('./tasks.csv', import.meta.url);

async function importTasks() {
  const stream = fs.createReadStream(csvPath);

  const parser = stream.pipe(
    parse({
      from_line: 2,
      trim: true,
    })
  );

  for await (const line of parser) {
    const [title, description] = line;

    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
  }

  console.log('Importação finalizada');
}

importTasks();
