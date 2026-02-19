import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, 'public', '4o4-pages');

// Get all folders inside public/4o4-pages
const folders = fs.readdirSync(pagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => {
    const folderName = dirent.name;
    const folderPath = path.join(pagesDir, folderName);
    let timestamp = 0;

    try {
      // Ask Git for the Unix timestamp of the last commit modifying this folder
      const gitCmd = `git log -1 --format="%ct" -- "${folderPath}"`;
      const gitTime = execSync(gitCmd).toString().trim();
      timestamp = gitTime ? parseInt(gitTime, 10) : Date.now();
    } catch (e) {
      // Fallback if Git fails
      timestamp = fs.statSync(folderPath).mtimeMs;
    }

    return { name: folderName, timestamp };
  });

// Find the most recent (highest timestamp)
const mostRecentFolder = [...folders].sort((a, b) => b.timestamp - a.timestamp)[0];

// Sort the full list alphabetically
const alphabeticalFolders = [...folders].sort((a, b) => a.name.localeCompare(b.name));

// Generate the HTML
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4o4 Pages Preview</title>
    <style>
        body { font-family: system-ui, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 20px; line-height: 1.6; }
        .recent { background: #e0f2fe; padding: 15px; border-radius: 8px; border: 1px solid #bae6fd; margin-bottom: 30px; }
        .recent h2 { margin-top: 0; color: #0284c7; }
        .recent a { font-size: 1.2em; font-weight: bold; }
        ul { list-style-type: none; padding: 0; }
        li { padding: 8px 0; border-bottom: 1px solid #eee; }
        a { color: #2563eb; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>4o4 Project - Page Previews</h1>
    
    ${mostRecentFolder ? `
    <div class="recent">
        <h2>Most Recent Addition</h2>
        <a href="./${mostRecentFolder.name}/">${mostRecentFolder.name}</a>
    </div>
    ` : ''}

    <h2>All Pages:</h2>
    <ul>
        ${alphabeticalFolders.map(f => `<li><a href="./${f.name}/">${f.name}</a></li>`).join('')}
    </ul>
</body>
</html>
`;

// Write the index.html into the public/4o4-pages directory
fs.writeFileSync(path.join(pagesDir, 'index.html'), html);
console.log('Successfully generated index.html.');