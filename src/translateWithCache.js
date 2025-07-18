const cacheKey = 'translated_cache';
const MAX_CACHE_ENTRIES = 500;

export const translateWithCache = async (text, lang = 'EN') => {
  if (!text) return "";

  const normalizedLang = lang.toUpperCase();
  const key = `${text}_${normalizedLang}`;

  let cache = {};
  try {
    cache = JSON.parse(localStorage.getItem(cacheKey) || '{}');
  } catch (e) {
    console.warn('Corrupted localStorage cache. Clearing...');
    localStorage.removeItem(cacheKey);
    cache = {};
  }

  if (cache[key]) return cache[key];

  try {
    const res = await fetch('https://ggenius-api.onrender.com/depl.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        target_lang: normalizedLang,
      }),
    });

    if (!res.ok) {
      console.error(`DeepL API Error: ${res.status} ${res.statusText}`);
      return text;
    }

    const data = await res.json();
    console.log(data)
    const translated = data?.translations?.[0]?.text || text;

    // Обновляем кэш
    cache[key] = translated;

    // Обрезаем кэш если слишком большой
    if (Object.keys(cache).length > MAX_CACHE_ENTRIES) {
      const trimmed = Object.entries(cache).slice(-MAX_CACHE_ENTRIES);
      cache = Object.fromEntries(trimmed);
    }

    localStorage.setItem(cacheKey, JSON.stringify(cache));
    console.log('✅ Translated:', translated);
    return translated;
  } catch (err) {
    console.error('Ошибка перевода:', err);
    return text;
  }
};
