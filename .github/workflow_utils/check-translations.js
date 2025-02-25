const I18N_LOCATION = '../../auto_py_to_exe/web/js/i18n.js';
const README_LOCATION = '../../README.md';

const fs = require('fs');
const { supportedLanguages, translationMap } = require(I18N_LOCATION);
const readmeContent = fs.readFileSync(README_LOCATION, 'utf8');

// Build up a report to return
let report = '**Basic checks**:\n';
let shouldFail = false;

// Validate if languages are sorted by name

let supportedLanguagesSortedByNameError = null;
for (let i = 1; i < supportedLanguages.length; i++) {
  if (supportedLanguages[i - 1].name.localeCompare(supportedLanguages[i].name) > 0) {
    supportedLanguagesSortedByNameError = `Sorting error: "${supportedLanguages[i - 1].name}" should be after "${
      supportedLanguages[i].name
    }"`;
  }
}

if (supportedLanguagesSortedByNameError === null) {
  report += '\n- ✔️ i18n.js translationMap is sorted correctly';
} else {
  report += '\n- ❌ i18n.js translationMap is sorted correctly (new item has not been put in alphabetically)';
  report += `\n\t- ${supportedLanguagesSortedByNameError}`;
  shouldFail = true;
}

// Validate there are no extra codes in the translations

const getTranslationPathsWithExtraKeys = (map, languageCodes) => {
  const translationPathsWithExtraKeys = [];

  const traverse = (node, path = []) => {
    if (typeof node !== 'object' || node === null) return;

    if (Object.keys(node).some((key) => languageCodes.includes(key))) {
      Object.keys(node).forEach((key) => {
        if (!languageCodes.includes(key)) {
          translationPathsWithExtraKeys.push([path.join('.'), key]);
        }
      });
    } else {
      Object.entries(node).forEach(([key, value]) => traverse(value, [...path, key]));
    }
  };

  traverse(map);
  return translationPathsWithExtraKeys;
};

const translationPathsWithExtraKeys = getTranslationPathsWithExtraKeys(
  translationMap,
  supportedLanguages.map((l) => l.code)
);

if (translationPathsWithExtraKeys.length === 0) {
  report += '\n- ✔️ i18n.js translationMap does not contain extra translations';
} else {
  report +=
    '\n- ❌ i18n.js translationMap does not contain extra translations (hints missing supportedLanguages entry)';
  translationPathsWithExtraKeys.forEach(([path, key]) => {
    report += `\n\t- ${path} has ${key}`;
  });
  shouldFail = true;
}

// Validate the README translation table is sorted by name

function extractTranslationTable(content) {
  const lines = content.split('\n');

  let tableStart = false;
  let tableLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '## Translations') {
      tableStart = true;
      i++; // Skip the next line (empty)
      continue;
    }

    if (tableStart) {
      if (lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
      } else {
        break; // Stop when there are no more rows
      }
    }
  }

  // Skip the first two rows (header and ---) and then parse the data
  const tableRows = [];
  for (let i = 2; i < tableLines.length; i++) {
    const [_, language, translator, translated] = tableLines[i].split('|').map((x) => x.trim());
    tableRows.push({
      language,
      translator,
      translated,
    });
  }

  return tableRows;
}

const readmeTranslationsTableRows = extractTranslationTable(readmeContent);

let readmeTranslationsTableRowsSortedByLanguageError = null;
for (let i = 1; i < readmeTranslationsTableRows.length; i++) {
  if (readmeTranslationsTableRows[i - 1].language.localeCompare(readmeTranslationsTableRows[i].language) > 0) {
    readmeTranslationsTableRowsSortedByLanguageError = `Sorting error: "${
      readmeTranslationsTableRows[i - 1].language
    }" should be after "${readmeTranslationsTableRows[i].language}"`;
  }
}

if (readmeTranslationsTableRowsSortedByLanguageError === null) {
  report += '\n- ✔️ README.md translation table is sorted correctly';
} else {
  report += '\n- ❌ README.md translation table is sorted correctly (new row has not been put in alphabetically)';
  report += `\n\t- ${readmeTranslationsTableRowsSortedByLanguageError}`;
  shouldFail = true;
}

// Identify missing translations in i18n.js

const countMissingTranslations = (map, languageCodes) => {
  const missingPaths = Object.fromEntries(languageCodes.map((lang) => [lang, []]));

  const traverse = (node, path = []) => {
    if (typeof node !== 'object' || node === null) return;

    if (Object.keys(node).some((key) => languageCodes.includes(key))) {
      languageCodes.forEach((lang) => {
        if (!(lang in node)) {
          missingPaths[lang].push(path.join('.'));
        }
      });
    } else {
      Object.entries(node).forEach(([key, value]) => traverse(value, [...path, key]));
    }
  };

  traverse(map);
  return missingPaths;
};

const allMissingTranslationPaths = countMissingTranslations(
  translationMap,
  supportedLanguages.map((l) => l.code)
);

// Match the i18n.js translations with the README translations table

const translationMergeErrors = [];

const mergedTranslations = supportedLanguages.map((l) => {
  const missingTranslationPaths = allMissingTranslationPaths[l.code];
  const readmeRow = readmeTranslationsTableRows.find((r) => r.language === l.name);

  if (missingTranslationPaths === undefined) {
    translationMergeErrors.push(`Unable to find missing translation count for code "${l.code}"`);
    shouldFail = true;
  }
  if (readmeRow === undefined) {
    translationMergeErrors.push(`Unable to find README row for language "${l.name}"`);
    shouldFail = true;
  }

  return {
    ...l,
    missingTranslationPaths,
    readmeRow,
  };
});

if (translationMergeErrors.length > 0) {
  report += '\n\n**Translation Errors**:\n';
  translationMergeErrors.forEach((e) => {
    report += `\n- ❌ ${e}`;
  });
} else {
  report += '\n\n**Translations**:\n';
  report += '\n\n| Name | Code | i18n.js Missing Count | Translator | Translated |';
  report += '\n| ---- | ---- | --------------------- | ---------- | ---------- |';
  mergedTranslations.forEach((t) => {
    const missingWithWarning =
      t.missingTranslationPaths.length === 0
        ? t.missingTranslationPaths.length
        : `${t.missingTranslationPaths.length} ⚠️`;
    report += `\n| ${t.name} | ${t.code} | ${missingWithWarning} | ${t.readmeRow.translator} | ${t.readmeRow.translated} |`;
  });
}

report += '\n\n**Warnings**:\n';
mergedTranslations.forEach((t) => {
  t.missingTranslationPaths.forEach((path) => {
    report += `\n- ⚠️ ${t.name} (${t.code}) is missing a translation for ${path}`;
  });
});

// Output and exit with an exit code if needed

console.log(report);
if (shouldFail) {
  process.exit(1);
}
