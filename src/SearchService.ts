export interface SearchResult {
    title: string
    documentUrl: string
}

export interface SearchResponse {
    query: string;
    results: {
        rank: number;
        document: string;
    }[];
}

export interface DocumentStructure {
    title: string;
    url: string;
    id: string;
    price: number;
    art: string;
}

export class SearchService {
    private search_endpoint: string;

    private token: string;

    constructor(serviceUrl: string, token: string) {
        this.search_endpoint = `${serviceUrl}/search?`;
        this.token = token;
    }

    private async _search(input: string, offset?: number, count?: number): Promise<SearchResult[]> {
        const params = new URLSearchParams({
            token: this.token,
            query: input,
        });
        if (offset) {
            params.append('offset', `${offset}`);
        }
        if (count) {
            params.append('offset', `${count}`);
        }
        const response = await fetch(this.search_endpoint + params);

        const data: SearchResponse = await response.json();

        const searchResults: SearchResult[] = data?.results.map((r) => {
            const document: DocumentStructure = JSON.parse(r.document);
            return {
                title: document.title,
                documentUrl: document.url,
            };
        });
        return searchResults;
    }

    async search(input: string, offset?: number, count?: number) {
        try {
            return await this._search(input, count, offset);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return [] as SearchResult[];
        }
    }
}
