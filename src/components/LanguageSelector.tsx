import { useRouter } from 'next/router';

export default function LanguageSelector() {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const switchLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className="text-sm text-gray-600 hover:text-accent transition-colors"
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchLanguage('ko')}
        className="text-sm text-gray-600 hover:text-accent transition-colors"
      >
        KO
      </button>
    </div>
  );
} 