"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ConfirmExternalModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
}

export default function ConfirmExternalModal({
    isOpen,
    onClose,
    onConfirm,
    title = "Переход в стороннее приложение",
    description = "Вы покидаете наш сайт и переходите в стороннее приложение. Обратите внимание на безопасность ваших данных.",
    confirmText = "Перейти",
    cancelText = "Отмена"
}: ConfirmExternalModalProps) {
    const [shouldRender, setShouldRender] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setShouldRender(false), 300);
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!mounted || (!shouldRender && !isOpen)) return null;

    const modalContent = (
        <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0a0f14]/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div
                className={`relative w-full max-w-sm bg-[#161f28] border border-slate-800 rounded-3xl p-8 shadow-2xl transition-all duration-300 transform ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                    }`}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="size-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                        <span className="material-symbols-outlined text-blue-400 text-3xl">info</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                        {description}
                    </p>

                    <div className="flex w-full gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-colors"
                        >
                            {cancelText}
                        </button>
                        <button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="flex-1 py-3 rounded-xl bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold shadow-lg shadow-[#137fec]/30 transition-all active:scale-95"
                        >
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
