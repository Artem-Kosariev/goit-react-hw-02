import css from './Options.module.css'

const Options = ({onUpdate, total, onReset}) => {

    return ( <ul  className={css.buttons}>
        <li><button  className={css.button}  onClick={() => onUpdate("good")} type="button">Good</button></li>
        <li><button   className={css.button} onClick={() => onUpdate("neutral")} type="button">Natural</button></li>
        <li><button  className={css.button} onClick={() => onUpdate("bad")} type="button">Bad</button></li>
        <li> {total > 0 && <button  className={css.button} onClick={onReset}>Reset</button>}
    </li>
    </ul>
    );

};
export default Options;
