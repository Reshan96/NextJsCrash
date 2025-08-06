"use client";

import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    const parts = pathname.split('/')[2];
    return <h1>Page not found in {parts}</h1>;
}