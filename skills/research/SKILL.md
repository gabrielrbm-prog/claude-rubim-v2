---
name: research
description: Deep research on any topic using web search
argument-hint: "<topic to research>"
disable-model-invocation: true
allowed-tools: WebSearch, WebFetch, Read, Write
---

Perform deep research on the given topic:

1. **Search** the web for the most recent and authoritative sources
2. **Read** the top 3-5 most relevant results
3. **Synthesize** the information into a clear, structured summary
4. **Include**:
   - Key findings and facts
   - Different perspectives if applicable
   - Practical recommendations
   - Sources with URLs
5. **Format** the output in clean markdown with headers and bullet points
6. Save the research to `~/Documents/Projetos/Claude/research-<topic>.md` if the user wants to keep it

Topic: $ARGUMENTS
