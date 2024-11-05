// src/types.ts
export interface Movie {
    Title: string;
    Poster: string;
    imdbID: string;
}

export interface OMDbResponse {
    Search?: Movie[];
    totalResults?: string;
    Response: string; // 'True' or 'False'
    Error?: string; // In case of an error
}
