export async function translateWithCache(text, lang = 'uk') {
  if (!text || typeof text !== 'string') return text;

  const normalizedLang = lang.toUpperCase();
  const cacheKey = `deepl_${normalizedLang}:${text}`;

  // Проверка кэша
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch('https://ggenius-api.onrender.com/depl.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        target_lang: normalizedLang,
      }),
    });

    if (!response.ok) {
      console.error('❌ DeepL API error:', response.status, await response.text());
      return text;
    }

    const data = await response.json();
    const translated = data.translations?.[0]?.text || text;

    // Сохраняем в localStorage
    localStorage.setItem(cacheKey, translated);
    return translated;
  } catch (error) {
    console.error('❌ Ошибка при переводе:', error);
    return text;
  }
}
