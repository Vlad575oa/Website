"use client";

import { useState } from "react";
import ConfirmExternalModal from "./ConfirmExternalModal";
import { useLanguage } from "@/lib/i18n";

interface ExternalTGLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export default function ExternalTGLink({ href, children, className, title }: ExternalTGLinkProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const handleConfirm = () => {
        window.open(href, "_blank");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`${className} relative group/tg`}
                title={title}
                type="button"
            >
                {children}
            </button>
            <ConfirmExternalModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={handleConfirm}
                title={t.modals.external_link.title_tg}
                description={t.modals.external_link.description_tg}
                confirmText={t.modals.external_link.confirm}
                cancelText={t.modals.external_link.cancel}
            />
        </>
    );
}
