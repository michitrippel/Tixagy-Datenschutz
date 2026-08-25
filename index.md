---
layout: default
title: Tixagy Privacy – Choose your language
description: Choose a language for the Tixagy privacy policy.
lang: en
body_class: language-home
permalink: /
---

<main id="main-content" class="language-hub" data-language-chooser>
  <p class="hub-eyebrow">Tixagy Privacy</p>
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
    The complete legally reviewed text is currently available in German. Other language pages clearly identify the German original while reviewed translations are being prepared.
  </p>
</main>
