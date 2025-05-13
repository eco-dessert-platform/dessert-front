declare global {
  export interface Window {
    Kakao: any;
    FlareLane: any;
  }
}

// Tanstack-Query
interface Meta {
  errorMessage?: string;
}

declare module '@tanstack/react-query' {
  interface QueryMeta extends Meta {}
}

export {};
