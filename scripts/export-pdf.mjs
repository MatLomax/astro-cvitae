import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(rootDir, "..");
const distDir = path.join(projectDir, "dist");
const htmlPath = path.join(distDir, "index.html");
const pdfHtmlPath = path.join(distDir, "index.pdf.html");
const astroAssetsDir = path.join(distDir, "_astro");

const outputDir = path.join(projectDir, "output");
const pdfPath = path.join(outputDir, "Mathieu Lomax - CV.pdf");

async function ensureOutputDirExists() {
  try {
    await fs.access(outputDir);
  } catch {
    await fs.mkdir(outputDir, { recursive: true });
  }
}

async function ensureBuildExists() {
  try {
    await fs.access(htmlPath);
  } catch {
    throw new Error(
      "Build output not found. Run `npm run build` before exporting the PDF.",
    );
  }
}

async function buildPdfHtml() {
  const html = await fs.readFile(htmlPath, "utf-8");
  let rewrittenHtml = html.replace(/(href|src)="\/(?!\/)/g, '$1="./');
  const pdfClass = "pdf-export";

  if (rewrittenHtml.includes("<body")) {
    rewrittenHtml = rewrittenHtml.replace(
      /<body([^>]*)class="([^"]*)"/,
      (match, attributes, className) => {
        if (className.includes(pdfClass)) {
          return match;
        }

        return `<body${attributes}class="${className} ${pdfClass}"`;
      },
    );

    if (!rewrittenHtml.includes(`class="${pdfClass}`)) {
      rewrittenHtml = rewrittenHtml.replace(
        /<body([^>]*)>/,
        `<body$1 class="${pdfClass}">`,
      );
    }
  }

  await fs.writeFile(pdfHtmlPath, rewrittenHtml, "utf-8");
}

async function rewriteAstroCssUrls() {
  let entries = [];

  try {
    entries = await fs.readdir(astroAssetsDir, { withFileTypes: true });
  } catch {
    return;
  }

  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".css"))
      .map(async (entry) => {
        const cssPath = path.join(astroAssetsDir, entry.name);

        const css = await fs.readFile(cssPath, "utf-8");
        const rewrittenCss = css.replace(/url\((['"]?)\/_astro\//g, "url($1./");

        if (rewrittenCss !== css) {
          await fs.writeFile(cssPath, rewrittenCss, "utf-8");
        }
      }),
  );
}

async function cleanupPdfHtml() {
  try {
    await fs.unlink(pdfHtmlPath);
  } catch {
    // Ignore cleanup failures.
  }
}

async function exportPdf() {
  await ensureBuildExists();
  await ensureOutputDirExists();
  await buildPdfHtml();
  await rewriteAstroCssUrls();

  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();

    await page.goto(`file://${pdfHtmlPath}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "12mm",
        right: "12mm",
        bottom: "12mm",
        left: "12mm",
      },
    });
  } finally {
    await browser.close();
    await cleanupPdfHtml();
  }
}

exportPdf().catch((error) => {
  console.error(error);
  process.exit(1);
});
