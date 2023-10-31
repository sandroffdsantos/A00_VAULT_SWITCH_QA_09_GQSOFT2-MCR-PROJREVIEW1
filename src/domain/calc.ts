/** @format */
/**
 *
 * @param parcelas
 * @returns
 */
export function sumOnly(...parcelas: number[]): number {
  return parcelas.reduce((total, parcela) => total + parcela);
}
