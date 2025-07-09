export type Article = {
    id: number;
    title: string;
    summary: string;
    image: string;
    createdAt: string;
}

export type NewsSpotlight = {
    mainNews: Article[];
    mostRead: Article[];
    podcasts: Article[];
    sponsors: Article[];
}