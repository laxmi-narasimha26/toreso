import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceApp = path.join(root, ".next", "server", "app");
const target = path.join(root, ".cf-pages-static");

async function copyHtmlFiles(sourceDir, relativeDir = "") {
  const entries = await readdir(path.join(sourceDir, relativeDir), {
    withFileTypes: true,
  });

  await Promise.all(
    entries.map(async (entry) => {
      const relativePath = path.join(relativeDir, entry.name);
      const sourcePath = path.join(sourceDir, relativePath);

      if (entry.isDirectory()) {
        await copyHtmlFiles(sourceDir, relativePath);
        return;
      }

      if (!entry.isFile() || !entry.name.endsWith(".html")) {
        return;
      }

      const destinationPath = path.join(target, relativePath);
      await mkdir(path.dirname(destinationPath), { recursive: true });
      await cp(sourcePath, destinationPath, { force: true });
    }),
  );
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });

await cp(path.join(root, "public"), target, { recursive: true, force: true });
await mkdir(path.join(target, "_next", "static"), { recursive: true });
await cp(path.join(root, ".next", "static"), path.join(target, "_next", "static"), {
  recursive: true,
  force: true,
});
await copyHtmlFiles(sourceApp);

console.log(`Cloudflare Pages static bundle written to ${target}`);
