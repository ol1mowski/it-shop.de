import Instruction from './Instruction/Instruction';
import style from './instructionSection.module.scss';

const InstructionSection = () => {

    const INSTRUCTION_DATA = [
        {
            id: 1,
            header: 'Find what fascinates you & choose your course',
            content: 'Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.',
        },
        {
            id: 2,
            header: 'Learn by doing',
            content: 'Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer ac nunc dapibus.',
        },
        {
            id: 3,
            header: 'Get instant expert feedback',
            content: 'Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.',
        },
        {
            id: 4,
            header: 'Put your learning into practice & find your dream job',
            content: 'Sed fermentum ut nibh duis. Dolor pretium arcu, tincidunt ultrices tristique arcu cursus massa gravida tortor nulla, mollis id pretium.',
        },
    ];

    return (
        <>
            <section className={style.instructionSection}>
                <h2 className={style.instructionSection__h2}>
                    How Does It Work?
                </h2>
                {INSTRUCTION_DATA.map((val) => (
                    <Instruction
                        key={val.id}
                        id={val.id}
                        header={val.header}
                        content={val.content}
                    />
                ))}
            </section>
        </>
    );
};

export default InstructionSection;