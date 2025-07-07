// useLangChange.js
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

function useLangChange() {
  const { l: lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n?.changeLanguage) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
}

export default useLangChange;
