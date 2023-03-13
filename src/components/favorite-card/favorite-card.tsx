import styles from './favorite-card.module.scss';
import classNames from 'classnames';

export interface FavoriteCardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title?: string;
        overview: string;
        vote_avarage: string;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path} className={styles.fImg} />
            <div className={styles.detail}>
                <h1 className={styles.title}>{movie.title} </h1>
                <span>{movie.vote_avarage} </span>
            </div>
            <div className={styles.detele}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
            </div>
        </div>
    );
};