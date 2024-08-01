export interface Character {
  id?: string;
  name:string;
  bounty:string;
}

export function getBounty(value: number): string {
  const amount:number = (value * (10**6));
  const result:string = amount.toLocaleString('es-ES');
  return `$${result}`;
}
