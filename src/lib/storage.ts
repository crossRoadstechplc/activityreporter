import coffee from '@/data/coffee.json';
import operations from '@/data/operations.json';
import type { Kind } from './config';
export type RecordRow = {id:string; [key:string]:string|number};
export function load(kind:Kind):RecordRow[] {
 const fallback = kind==='coffee'?coffee:operations;
 try {const saved=localStorage.getItem('b-agro-'+kind);return saved?JSON.parse(saved) as RecordRow[]:fallback as RecordRow[];} catch{return fallback as RecordRow[];}
}
export function persist(kind:Kind,rows:RecordRow[]){localStorage.setItem('b-agro-'+kind,JSON.stringify(rows));}
