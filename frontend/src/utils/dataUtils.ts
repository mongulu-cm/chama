/**
 * Vérifie si une valeur est considérée comme "données manquantes"
 * @param value La valeur à vérifier
 * @returns true si les données sont manquantes, false sinon
 */
export const isDataMissing = (value: unknown): boolean => {
  if (value === undefined || value === null) return true;
  if (typeof value === 'string' && (value.includes('MISSING_DATA') || value.trim() === '')) return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) return true;
  return false;
};

/**
 * Remplace les valeurs manquantes dans un objet par une valeur par défaut
 * @param obj L'objet à traiter
 * @param defaultValue La valeur par défaut à utiliser (optionnel)
 * @returns Un nouvel objet avec les valeurs manquantes remplacées
 */
export const replaceEmptyValues = <T extends Record<string, unknown>>(
  obj: T, 
  defaultValue: any = "À venir"
): T => {
  // Créer une copie mutable de l'objet
  const result = { ...obj } as Record<string, unknown>;
  
  Object.keys(result).forEach(key => {
    const value = result[key];
    
    if (isDataMissing(value)) {
      result[key] = defaultValue;
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result[key] = replaceEmptyValues(value as Record<string, unknown>, defaultValue);
    }
  });
  
  return result as T;
}; 