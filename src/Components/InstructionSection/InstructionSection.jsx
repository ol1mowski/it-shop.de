import { INSTRUCTION_DATA } from '../../data/InstructionData';
import Instruction from './Instruction/Instruction';
import style from './instructionSection.module.scss';


const InstructionSection = () => {

    const instruction = INSTRUCTION_DATA;

    return (
        <>
            <section className={style.instructionSection}>
                <h2 className={style.instructionSection__h2}>
                    How Does It Work?
                </h2>
                {instruction.map((val) => (
                    <Instruction
                        key={val.id}
                        id={val.id}
                        header={val.header}
                        content={val.content}
                        src={val.src}
                    />
                ))}
            </section>
        </>
    );
};

export default InstructionSection;