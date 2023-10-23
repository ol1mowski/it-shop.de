import style from './InputsSection.module.scss';
import search from '../../../assets/icons/search.svg';

const InputsSection = () => {

    return (
        <>
            <main className={style.inputsSection}>
                <form className={style.inputsSection__form}>
                    <input id={style.inp} type="text" className="form-control form-control-lg mb-2" placeholder="Search courses..." />
                    <select id={style.sel} className="form-select form-select-lg mb-2" defaultValue="categories">
                        <option value='categories'>Categories</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="Programming">Programming</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Software Testing">Software Testing</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Network &amp; Security">Network &amp; Security</option>
                    </select>

                    <button className={style.inputsSection__button}>
                        <img src={search} alt='search icon' className={style.inputsSection__button__search} />
                    </button>
                </form>
            </main>
        </>
    )
}

export default InputsSection;