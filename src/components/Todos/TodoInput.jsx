import React from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = () => {

    const {
        'form-wrapper': wrapper,
        'insert-form': insertForm,
        'insert-btn': insertBtn,
        open: openStyle,
    } = styles;

    return (
        <>
            <div className={wrapper}>
                <form className={insertForm}
                      onSubmit={e => {
                          e.preventDefault()
                          const form = e.currentTarget; // form 요소
                          const value = new FormData(form).get('todo'); // name="todo" 값
                          console.log(value);

                      }}
                >
                    <input
                        type='text'
                        name="todo" // 값을 가져오기 위한 name 추가
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                    />
                </form>
            </div>
            <button
                className={`${insertBtn}`}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;
