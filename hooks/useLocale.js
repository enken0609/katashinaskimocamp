import { useRouter } from 'next/router';
import en from "../locales/en.js";
import ja from "../locales/ja.js";
import zhcn from "../locales/zh.js";
import ko from "../locales/ko.js";

function useLocale() {
  const router = useRouter();
  const { locale } = router;

  // ロケールに対応する翻訳セットを返す
  const translations = {
    en: en,
    ja: ja,
    zhcn: zhcn,
    ko: ko,
  };

  return {
    t: translations[locale],
    locale
  };
}

export default useLocale;
