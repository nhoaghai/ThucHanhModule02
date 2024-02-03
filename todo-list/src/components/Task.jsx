import React from 'react'

export default function (props) {
    let {task} = props;
    return (
        <div>
            <row>
                <span>{task.taskName}</span>
                <input type="checkbox" name="" className="checkbox" />
                <a>
                    <i className="fa-solid fa-trash fa-xs" />
                </a>
            </row>
        </div>
    )
}
