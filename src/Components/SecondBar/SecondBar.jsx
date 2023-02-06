import React from 'react';
import st from "./SecondBar.module.css"

const SecondBar = (props) => {
    return(
        <div className={st.secondBar}>
            <div className={st.innerCard}>
                Some text...
            </div>
        </div>
    )
};

export default SecondBar;