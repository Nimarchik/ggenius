import { useEffect, useState, useRef } from 'react'
import { translateWithCache } from './depl'

const translationCache = new Map() // Чтобы не перезапрашивать в пределах сессии

export default function useTranslatedText(text, lang = 'UK') {
  const [translated, setTranslated] = useState(text)
  const [loading, setLoading] = useState(false)

  const currentText = useRef(text)
  const currentLang = useRef(lang)

  useEffect(() => {
    if (!text || typeof text !== 'string') return

    const cacheKey = `${lang}:${text}`

    if (translationCache.has(cacheKey)) {
      setTranslated(translationCache.get(cacheKey))
      return
    }

    setLoading(true)
    currentText.current = text
    currentLang.current = lang

    translateWithCache(text, lang).then((result) => {
      // Избегаем гонки эффектов
      if (
        currentText.current === text &&
        currentLang.current === lang
      ) {
        translationCache.set(cacheKey, result)
        setTranslated(result)
        setLoading(false)
      }
    })
  }, [text, lang])

  return translated
}
