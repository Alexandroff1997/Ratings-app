import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 'S' | 'M' | 'L';
	children: ReactNode;
}