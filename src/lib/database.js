import { openDB } from 'idb';

const dbName = 'code-snippets-db';
const storeName = 'snippets';

async function openSnippetsDB() {
  return openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
    },
  });
}

export async function saveSnippet(snippetId, code) {
  const db = await openSnippetsDB();
  const tx = db.transaction(storeName, 'readwrite');
  const store = tx.objectStore(storeName);
  await store.put({ id: snippetId, code });
  await tx.done;
}

export async function getSavedSnippetCode(snippetId) {
  const db = await openSnippetsDB();
  const snippet = await db.get(storeName, snippetId);
  return snippet ? snippet.code : null;
}

export async function getAllSavedSnippets() {
  const db = await openSnippetsDB();
  const tx = db.transaction(storeName, 'readonly');
  const store = tx.objectStore(storeName);
  const allSnippets = await store.getAll();
  await tx.done;
  return allSnippets;
}
