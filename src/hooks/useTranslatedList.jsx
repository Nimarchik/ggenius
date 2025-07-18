// hooks/useTranslatedList.js
import { useEffect, useState } from "react";
import { translateWithCache } from "../translateWithCache";

const useTranslatedList = (list, lang) => {
  const [translatedList, setTranslatedList] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchTranslations = async () => {
      const results = await Promise.all(
        list.map((text) => translateWithCache(text, lang))
      );

      if (isMounted) {
        setTranslatedList(results);
      }
    };

    if (list.length) {
      fetchTranslations();
    }

    return () => {
      isMounted = false;
    };
  }, [list, lang]);

  return translatedList;
};

export default useTranslatedList;
