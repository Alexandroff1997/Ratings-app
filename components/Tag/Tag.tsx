import styles from './Tag.module.css';
import cn from 'classnames';
import { ITagProps } from './Tag.props';

export const Tag = ({ size = 'S', children, href, color = 'ghost', className, ...props }: ITagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.tags]: size === 'S',
				[styles.tagm]: size === 'M',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary'

			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};