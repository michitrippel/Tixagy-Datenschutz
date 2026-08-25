---
layout: default
title: Tixagy-Konto und Daten löschen
description: Öffentliche Seite zum Anfordern der endgültigen Löschung eines Tixagy-Kontos und der zugehörigen Daten.
lang: de
body_class: account-deletion-page
permalink: /delete-account/
page_script: /assets/js/account-deletion.js
hide_language_alternates: true
---

<main id="main-content" class="policy-shell deletion-shell">
  <article class="policy-card deletion-card" markdown="1">

<p class="deletion-eyebrow">Tixagy · Konto &amp; Daten</p>

# Tixagy-Konto endgültig löschen

<p class="deletion-lead">Du kannst die endgültige Löschung deines Tixagy-Kontos und der damit verbundenen Daten auch außerhalb der App anfordern. Du musst die App dafür nicht erneut installieren.</p>

<a class="primary-action" href="#deletion-request">Löschanfrage starten</a>

<div class="deletion-facts">
  <div>
    <strong>Endgültige Löschung</strong>
    <span>Kein bloßes Sperren oder Einfrieren des Kontos.</span>
  </div>
  <div>
    <strong>In der Regel innerhalb von 30 Tagen</strong>
    <span>Wir bestätigen die Anfrage und teilen dir mit, falls wir noch Angaben benötigen.</span>
  </div>
  <div>
    <strong>Keine Zugangsdaten mitsenden</strong>
    <span>Wir fragen niemals nach Passwort, Push-Token oder Anmeldetoken.</span>
  </div>
</div>

## Was wird gelöscht?

Nach erfolgreicher Zuordnung löschen wir das Tixagy-Konto und die zugehörigen Daten, insbesondere:

- Benutzername, Konto-, Geräte- und Installationskennungen,
- Elo-Wert, Rang, Erfahrungspunkte, Belohnungen und Spielverlauf,
- Freundschaften, Einladungen und Herausforderungen,
- gespeicherte Chat-Nachrichten und Push-Token sowie
- kontobezogene eigene Nutzungsanalyse.

Nur Daten, die wir aus zwingenden gesetzlichen Gründen oder zur Klärung konkreter Sicherheits-, Missbrauchs- oder Rechtsfälle noch benötigen, können ausnahmsweise länger aufbewahrt werden. Sie werden dann gesperrt, ausschließlich für diesen Zweck verwendet und anschließend gelöscht.

## So funktioniert die Anfrage

1. Gib unten deinen Tixagy-Benutzernamen und möglichst die Plattform sowie den ungefähren Zeitpunkt der letzten Nutzung an.
2. Nach dem Absenden öffnet sich dein E-Mail-Programm mit einer vorbereiteten Nachricht an Tixagy. Prüfe die Angaben und sende die E-Mail ab.
3. Da Tixagy-Konten pseudonym und nicht mit einer E-Mail-Adresse registriert sind, können wir zur sicheren Zuordnung weitere Angaben erfragen. Eine erneute Installation der App ist dafür nicht erforderlich.
4. Nach erfolgreicher Prüfung löschen wir das Konto und die zugehörigen Daten grundsätzlich unverzüglich und in der Regel innerhalb von 30 Tagen.

<section id="deletion-request" class="request-panel" aria-labelledby="request-title">
  <div class="request-panel-copy">
    <p class="deletion-eyebrow">Löschantrag / Deletion request</p>
    <h2 id="request-title">E-Mail vorbereiten</h2>
    <p>Die Eingaben werden von dieser Website nicht gespeichert oder an einen Server übertragen. Erst dein E-Mail-Programm versendet die Nachricht, nachdem du sie geprüft hast.</p>
  </div>

  <form class="deletion-form" data-deletion-request>
    <div class="form-field">
      <label for="deletion-username">Tixagy-Benutzername / Username <span aria-hidden="true">*</span></label>
      <input id="deletion-username" name="username" type="text" maxlength="50" autocomplete="off" required aria-describedby="username-help">
      <small id="username-help">Bitte genau so schreiben, wie der Name in Tixagy angezeigt wurde.</small>
    </div>

    <div class="form-field">
      <label for="deletion-platform">Plattform / Platform</label>
      <select id="deletion-platform" name="platform">
        <option value="Nicht angegeben">Bitte auswählen / Select</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
        <option value="Beide oder unbekannt">Beide oder unbekannt / Both or unknown</option>
      </select>
    </div>

    <div class="form-field">
      <label for="deletion-last-used">Ungefähre letzte Nutzung / Approximate last use</label>
      <input id="deletion-last-used" name="lastUsed" type="date">
    </div>

    <div class="form-field">
      <label for="deletion-note">Zusätzliche Hinweise / Additional details</label>
      <textarea id="deletion-note" name="note" rows="4" maxlength="800" placeholder="Optional: letzter Elo-Wert, frühere Benutzernamen oder andere Angaben, die bei der Zuordnung helfen."></textarea>
      <small>Keine Passwörter, Push-Token oder sonstigen geheimen Zugangsdaten eintragen.</small>
    </div>

    <label class="confirmation-field" for="deletion-confirmation">
      <input id="deletion-confirmation" name="confirmation" type="checkbox" required>
      <span>Ich beantrage die endgültige Löschung dieses Tixagy-Kontos und der damit verbundenen Daten. / I request permanent deletion of this Tixagy account and its associated data.</span>
    </label>

    <button class="primary-action form-submit" type="submit">Löschanfrage per E-Mail öffnen</button>
    <p class="form-status" data-deletion-status aria-live="polite"></p>
    <p class="form-fallback">Falls sich kein E-Mail-Programm öffnet, sende die Anfrage mit dem Betreff „Tixagy – endgültige Kontolöschung“ direkt an <a href="mailto:service@tixagy.com?subject=Tixagy%20%E2%80%93%20endg%C3%BCltige%20Kontol%C3%B6schung">service@tixagy.com</a>.</p>
  </form>

  <noscript>
    <p>JavaScript ist deaktiviert. Sende deine Anfrage mit dem Betreff „Tixagy – endgültige Kontolöschung“ direkt an <a href="mailto:service@tixagy.com?subject=Tixagy%20%E2%80%93%20endg%C3%BCltige%20Kontol%C3%B6schung">service@tixagy.com</a>.</p>
  </noscript>
</section>

## English summary

You can request permanent deletion of your Tixagy account and its associated data without reinstalling or opening the app. Use the form above or email [service@tixagy.com](mailto:service@tixagy.com) with the subject **“Tixagy – permanent account deletion”**.

Please include your Tixagy username, platform and approximate last use. Do not send passwords or authentication tokens. Because Tixagy accounts are pseudonymous and are not registered with an email address, we may ask for additional information to safely match the request to the correct account. We generally complete verified requests within 30 days.

## Kontakt

Tridots UG (haftungsbeschränkt)<br>
Rothenbaumchaussee 31<br>
20148 Hamburg<br>
E-Mail: [service@tixagy.com](mailto:service@tixagy.com)

[Zur Datenschutzerklärung]({{ '/privacy/de/' | relative_url }})

  </article>
</main>
