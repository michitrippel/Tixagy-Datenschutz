(() => {
  const storageKey = 'tixagy-privacy-language';
  const languageLinks = Array.from(document.querySelectorAll('[data-language]'));

  for (const link of languageLinks) {
    link.addEventListener('click', () => {
      try {
        window.localStorage.setItem(storageKey, link.dataset.language);
      } catch {
        // Language selection still works when storage is unavailable.
      }
    });
  }

  const chooser = document.querySelector('[data-language-chooser]');
  if (!chooser || new URLSearchParams(window.location.search).has('choose')) return;

  let storedLanguage = null;
  try {
    storedLanguage = window.localStorage.getItem(storageKey);
  } catch {
    // Browser language detection remains available without storage.
  }

  const requestedLanguages = [storedLanguage, ...(navigator.languages || []), navigator.language]
    .filter(Boolean)
    .map((value) => value.toLowerCase().split(/[-_]/)[0]);

  const language = requestedLanguages.find((candidate) =>
    languageLinks.some((link) => link.dataset.language === candidate),
  );

  if (!language) return;

  const target = languageLinks.find((link) => link.dataset.language === language);
  if (target) window.location.replace(target.href);
})();
