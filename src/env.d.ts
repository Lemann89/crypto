export interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_CIONRANKING_BASE_URL: string;
  readonly VITE_CIONRANKING_HOST: string;
  readonly VITE_RAPIDAPI_KEY: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
