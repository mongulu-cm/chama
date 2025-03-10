import React, { ReactNode } from 'react';
import { isDataMissing } from '../../utils/dataUtils';
import MissingData from './MissingData';

interface MissingDataWrapperProps {
  data: unknown;
  children: ReactNode;
  message?: string;
  fallback?: ReactNode;
}

/**
 * Composant qui vérifie si les données sont manquantes et affiche soit le contenu enfant,
 * soit un composant MissingData, soit un fallback personnalisé
 */
const MissingDataWrapper: React.FC<MissingDataWrapperProps> = ({
  data,
  children,
  message,
  fallback
}) => {
  if (isDataMissing(data)) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return <MissingData message={message} />;
  }
  
  return <>{children}</>;
};

export default MissingDataWrapper; 