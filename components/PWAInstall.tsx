'use client';

import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as Record<string, unknown>).MSStream;
    setIsIOS(ios);

    const dismissed = sessionStorage.getItem('pwa-dismissed');
    if (dismissed) return;

    if (ios) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShow(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    setInstalling(true);
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setIsInstalled(true);
    } finally {
      setInstalling(false);
      setDeferredPrompt(null);
      setShow(false);
    }
  };

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('pwa-dismissed', '1');
  };

  if (isInstalled || !show) return null;

  return (
    <div className="fixed bottom-5 left-4 right-4 z-[9999] flex justify-center animate-slide-up">
      <div className="bg-gray-950 border border-green-800/60 rounded-2xl p-4 shadow-2xl shadow-black/40 max-w-sm w-full backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-800 flex items-center justify-center text-2xl font-black text-white flex-shrink-0 shadow-lg">
            ط
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white text-sm leading-tight">
              ثبّت تطبيق الطيبات على هاتفك
            </p>
            {isIOS ? (
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                اضغط على <span className="text-green-400">مشاركة ⬆️</span> ثم{' '}
                <span className="text-green-400">&ldquo;إضافة إلى الشاشة الرئيسية&rdquo;</span>
              </p>
            ) : (
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                وصول سريع بدون إنترنت — كتطبيق حقيقي على شاشتك
              </p>
            )}
          </div>
          <button
            onClick={dismiss}
            className="text-gray-600 hover:text-gray-300 transition-colors p-1 flex-shrink-0 mt-0.5"
            aria-label="إغلاق"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!isIOS && deferredPrompt && (
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleInstall}
              disabled={installing}
              className="flex-1 bg-green-600 hover:bg-green-500 disabled:opacity-60 text-white text-sm font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {installing ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  جارٍ التثبيت…
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" />
                    <path d="M20 18H4v2h16v-2z" />
                  </svg>
                  تثبيت الآن — مجاناً
                </>
              )}
            </button>
            <button
              onClick={dismiss}
              className="text-gray-500 hover:text-gray-300 text-xs px-3 py-2 rounded-xl transition-colors"
            >
              لاحقاً
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
