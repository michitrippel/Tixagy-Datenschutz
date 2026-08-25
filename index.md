---
layout: default
title: Tixagy Privacy – Choose your language
description: Choose a language for the Tixagy privacy policy.
lang: en
body_class: language-home
permalink: /
---

<main id="main-content" class="language-hub" data-language-chooser>
  <p class="hub-eyebrow">Privacy &amp; data</p>
  <h1>Choose your language.</h1>
  <p class="hub-intro">
    Select the language in which you want to open the privacy information.
    Your browser language is used as a suggestion and can be changed at any time.
  </p>

  <div class="language-grid">
    {% for language in site.data.languages %}
      <a
        class="language-card"
        href="{{ language.path | relative_url }}"
        lang="{{ language.code }}"
        hreflang="{{ language.code }}"
        data-language="{{ language.code }}"
      >
        <strong>{{ language.label }}</strong>
        <small>{{ language.availability }}</small>
      </a>
    {% endfor %}
  </div>

  <p class="hub-note">
    The complete current text is available in German. Other language pages clearly identify the German original while translations are being prepared.
  </p>

  <a class="hub-account-action" href="{{ '/delete-account/' | relative_url }}">
    <span>Account &amp; data</span>
    <strong>Request deletion of your Tixagy account</strong>
  </a>
</main>
