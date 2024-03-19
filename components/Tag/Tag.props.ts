import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'S' | 'M';
	children: ReactNode;
	color?: 'primary' | 'ghost' | 'red' | 'grey' | 'green';
	href?: string;
}