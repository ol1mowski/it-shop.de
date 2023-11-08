import style from './Instruction.module.scss';

const Instruction = props => {

    const { id, header, content } = props

    return (
        <>
            <div className={style.instructionContainer}>
                <div className={style.instructionContainer__imageSection}>
                    <div className={style.instructionContainer__imageSection__wrapper}>
                        <div className={style.instructionContainer__imageSection__wrapper__textWrapper}>
                            <h3 className={style.instructionContainer__imageSection__wrapper__textWrapper__h3}>
                                {id}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={style.instructionContainer__contentSection}>
                    <div className={style.instructionContainer__contentSection__header}>
                        <h2 className={style.instructionContainer__contentSection__header__h2}>
                            {header}
                        </h2>
                    </div>
                    <div className={style.instructionContainer__contentSection__p}>
                        <p>
                            { content }
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instruction;