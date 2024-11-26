import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import archiver from 'archiver';

const execAsync = promisify(exec);

async function createDownloads() {
  // Create dist directory if it doesn't exist
  await fs.mkdir('dist', { recursive: true });

  // Clean previous builds
  await fs.rm('dist', { recursive: true, force: true });
  await fs.mkdir('dist', { recursive: true });

  // Build plugins
  console.log('Building plugins...');
  await execAsync('npm run build:plugins');

  // Create zip files for each plugin
  const plugins = ['dh-gameroom', 'dh-gameroom-theme', 'dh-gameroom-elements'];

  for (const plugin of plugins) {
    console.log(`Creating ${plugin}.zip...`);
    const output = fs.createWriteStream(path.join('dist', `${plugin}.zip`));
    const archive = archiver('zip', { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(path.join('plugins', plugin), plugin);
    await archive.finalize();
  }

  console.log('Downloads created successfully in dist/');
}

createDownloads().catch(console.error);