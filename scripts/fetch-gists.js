import { writeFileSync } from "fs";
import fetch from "node-fetch";
import "dotenv/config";
import { snippets } from "../src/data/snippets.js";

const API_BASE_URL = "https://api.github.com";
const GITHUB_USERNAME = "gaearon"; // Or another user you want to test

async function fetchGistSnippets() {
  const githubToken = process.env.GITHUB_ACCESS_TOKEN;
  if (!githubToken) {
    console.error("GITHUB_ACCESS_TOKEN is not set. Please set the environment variable.");
    return;
  }

  let existingSnippets = snippets;

  try {
    const gistsRes = await fetch(`${API_BASE_URL}/users/${GITHUB_USERNAME}/gists`, {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!gistsRes.ok) {
      const errorText = await gistsRes.text();
      throw new Error(`GitHub Gist API failed: ${errorText}`);
    }

    const gistsData = await gistsRes.json();

    const jsGistFiles = gistsData.flatMap(gist =>
      Object.values(gist.files)
        .filter(file => file.language && file.language.toLowerCase() === "javascript")
        .map(file => ({ gist, file }))
    );

    const snippetData = await Promise.all(
      jsGistFiles.map(async ({ gist, file }) => {
        const rawRes = await fetch(file.raw_url);
        if (!rawRes.ok) {
          console.error(`Failed to fetch raw code for gist file: ${file.filename}`);
          return null;
        }
        const rawCode = await rawRes.text();

        return {
          id: `${gist.id}-${file.filename}`,
          title: file.filename,
          description: gist.description || "Imported from GitHub Gist",
          language: "javascript",
          code: rawCode,
          tags: ["gist", "javascript"],
          createdAt: new Date(gist.created_at),
          updatedAt: new Date(gist.updated_at)
        };
      })
    );

    const validSnippets = snippetData.filter(snippet => snippet !== null);
    const allSnippets = [...existingSnippets, ...validSnippets];

    writeFileSync(
      "./src/data/snippets.js",
      `export const snippets = ${JSON.stringify(allSnippets, null, 2)};`
    );

    console.log(`Added ${validSnippets.length} snippets to snippets.js`);

  } catch (err) {
    console.error("Error fetching snippets:", err);
  }
}

fetchGistSnippets();
