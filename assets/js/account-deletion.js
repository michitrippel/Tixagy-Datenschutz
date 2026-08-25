(() => {
  const form = document.querySelector('[data-deletion-request]');
  const status = document.querySelector('[data-deletion-status]');

  if (!(form instanceof HTMLFormElement)) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const username = String(data.get('username') || '').trim();
    const platform = String(data.get('platform') || 'Nicht angegeben').trim();
    const lastUsed = String(data.get('lastUsed') || 'Nicht angegeben').trim();
    const note = String(data.get('note') || '').trim() || 'Keine zusätzlichen Hinweise';

    const subject = `Tixagy – endgültige Kontolöschung – ${username}`;
    const body = [
      'Hallo Tixagy-Team,',
      '',
      'hiermit beantrage ich die endgültige Löschung meines Tixagy-Kontos und der damit verbundenen Daten.',
      '',
      `Tixagy-Benutzername: ${username}`,
      `Plattform: ${platform}`,
      `Ungefähre letzte Nutzung: ${lastUsed}`,
      `Zusätzliche Hinweise: ${note}`,
      '',
      'Mir ist bekannt, dass die Löschung endgültig ist.',
      '',
      'Viele Grüße',
    ].join('\n');

    if (status) {
      status.textContent = 'Dein E-Mail-Programm wird geöffnet. Bitte prüfe und sende die vorbereitete Nachricht.';
    }

    window.location.href = `mailto:service@tixagy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
