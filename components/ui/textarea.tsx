import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';


export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
({ className, ...props }, ref) => (
<textarea ref={ref} className={cn('w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30', className)} {...props} />
)
);
Textarea.displayName = 'Textarea';
