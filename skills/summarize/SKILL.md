---
name: summarize
description: Summarize a file, URL, or text content
argument-hint: "<file path or URL>"
disable-model-invocation: true
allowed-tools: Read, WebFetch, WebSearch, Glob
---

Summarize the provided content:

1. If a **file path** is given: read the file
2. If a **URL** is given: fetch and read the web page
3. If **text** is given: use it directly

Create a summary with:
- **TL;DR**: 1-2 sentence overview
- **Key Points**: 3-7 bullet points with the most important information
- **Details**: expanded explanation of each key point if needed
- **Action Items**: if the content contains tasks or next steps

Keep the language matching the original content (Portuguese if Portuguese, English if English).

Content to summarize: $ARGUMENTS
