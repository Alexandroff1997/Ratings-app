import { IParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ size = 'M', children, className, ...props }: IParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, {
			[styles.ps]: size === 'S',
			[styles.pm]: size === 'M',
			[styles.pl]: size === 'L'
		})}
		{...props}
		>
			{children}
		</p>
	);
};