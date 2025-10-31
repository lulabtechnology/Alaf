import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';


export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
({ className, ...props }, ref) => (
<input ref={ref} className={cn('w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30', className)} {...props} />
)
);
Input.displayName = 'Input';
