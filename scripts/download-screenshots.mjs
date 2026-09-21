// Downloads every screenshot listed in src/data/site.js into public/screenshots
// so the site can serve them itself instead of loading them from GitHub.
//
//   npm run screenshots
//
// Afterwards set SELF_HOST = true in src/data/site.js.
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { projects, SCREENSHOT_RAW_BASE } from '../src/data/site.js'

let failed = 0

for (const project of projects) {
  const dir = path.join('public', 'screenshots', project.repoName)
  await mkdir(dir, { recursive: true })

  for (const shot of project.shots) {
    const url = `${SCREENSHOT_RAW_BASE}/${project.repoName}/main/${shot.file}`
    const target = path.join(dir, path.basename(shot.file))

    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      await writeFile(target, Buffer.from(await response.arrayBuffer()))
      console.log('saved  ', target)
    } catch (error) {
      failed++
      console.warn('FAILED ', url, '-', error.message)
    }
  }
}

console.log(
  failed
    ? `\nDone with ${failed} failure(s). Check the repo and file names in src/data/site.js.`
    : '\nAll screenshots saved. Now set SELF_HOST = true in src/data/site.js.'
)
