# Milsearch lib

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)


Library provides class and set of interfaceses for working with Milsearch engine.

## SearchService class

This class prrovides all basic functionality for working with Milsearch server.
You should initialize it with:
```
- serviceUrl: string - url address for search service.
- token: string - your token
```

Class instance provides only one public method: `search` - this method sends request to the server with current search
and return data in `SearchResult[]` structure. Is will never throw an error, and will always return an array.
But if there is an error, it will be shown in console.

```
search: (input: string, offset?: number, count?: number) => Promise<SearchResult[]>
    - input: text that person is searching
    - offset: offset of requested data
    - count: number of results you want to load
```

## Interfaces

Library provide following interfaces:
`SearchResult`, `SearchResponse`, `DocumentStructure`;
