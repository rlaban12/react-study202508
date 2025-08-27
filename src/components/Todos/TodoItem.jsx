import React, {useState} from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = () => {

    console.log(styles)

    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle, active: checkActive } = styles;

    const [ flag, setFlag ] = useState(true);

    return (
        <li className={itemStyle}>
            <div className={`${checkCircle} ${flag ? checkActive: ''}`} onClick={() => setFlag(!flag)} >
                {flag && <MdDone/>}
            </div>
            <span className={text}>할 일 어쩌구~~</span>
            <div className={remove}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;
