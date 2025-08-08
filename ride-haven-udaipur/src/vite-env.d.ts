/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly EMAIL_USER ?:string 
readonly EMAIL_PASS?:string
readonly PORT?:string
}


interface ImportMeta {
  readonly env: ImportMetaEnv
}