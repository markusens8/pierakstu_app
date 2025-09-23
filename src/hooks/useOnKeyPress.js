import { useEffect } from 'react';
import { useAktivsContext } from '../context/AktivsContext';

export default function useOnKeyPress (callback, targetKey) {
  const aktivs = useAktivsContext();
  useEffect(() => {
    const keyPressHandler = (e) => {
      if(e.key === targetKey && aktivs.redigeSadalu === null) {
        callback();
        e.preventDefault();
      }
    }
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    }
  },[callback, targetKey, aktivs]);
}
