import { useRouter } from 'next/router';
import en from "../locales/en.js";
import ja from "../locales/ja.js";

function useLocale() {
  const router = useRouter();
  const { locale } = router;

  // ロケールに対応する翻訳セットを返す
  const translations = {
    en: en,
    ja: ja,
  };

  return {
    t: translations[locale],
    locale
  };
}

export default useLocale;
