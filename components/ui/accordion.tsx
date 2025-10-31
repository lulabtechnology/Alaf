'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';


export function Accordion({ items }: { items: { q: string; a: string }[] }) {
const [open, setOpen] = useState<number | null>(0);
return (
<div className="space-y-3">
{items.map((it, i) => (
<div key={i} className="card">
<button
className="w-full text-left p-4 flex items-center justify-between"
onClick={() => setOpen(open === i ? null : i)}
aria-expanded={open === i}
>
<span className="font-medium">{it.q}</span>
<span aria-hidden> {open === i ? '−' : '+'} </span>
</button>
<div className={cn("px-4 pb-4 text-gray-300", open === i ? "block" : "hidden")}>{it.a}</div>
</div>
))}
</div>
);
}
