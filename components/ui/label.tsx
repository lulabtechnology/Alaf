import { LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';


export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
return <label className={cn('block text-sm mb-1 text-gray-200', className)} {...props} />
}
