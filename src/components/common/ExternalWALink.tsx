"use client";

import { useState } from "react";
import ConfirmExternalModal from "./ConfirmExternalModal";
import { useLanguage } from "@/lib/i18n";

interface ExternalWALinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export default function ExternalWALink({ href, children, className, title }: ExternalWALinkProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const handleConfirm = () => {
        window.open(href, "_blank");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`${className} relative group/wa`}
                title={title}
                type="button"
            >
                {children}
            </button>
            <ConfirmExternalModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={handleConfirm}
                title={t.modals.external_link.title_wa}
                description={t.modals.external_link.description_wa}
                confirmText={t.modals.external_link.confirm}
                cancelText={t.modals.external_link.cancel}
            />
        </>
    );
}
