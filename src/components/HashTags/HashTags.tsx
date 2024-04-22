

import { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import s from './HashTags.module.scss'
interface TagsProps {
   [x: string]: any;
    tagItems: [] | {} | any;
    className?:string;
}
export const HashTags: FC<TagsProps> = ({tagItems}) => {
    return (
        <ul className={s.tags_items}>
            {tagItems.map((item: { link: string | undefined; tag: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => <li>
                <a href={item.link} className={[s.tags_items__tag,'tag'].join(' ')}>#{item.tag}</a>
            </li>
            )}

        </ul>
    )
}
export default HashTags;