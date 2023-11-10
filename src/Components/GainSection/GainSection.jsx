import Gain from './Gain/Gain';
import style from './gainSection.module.scss';
import video from '../../assets/icons/gain/video.png';
import mentor from '../../assets/icons/gain/mentor.png';
import access from '../../assets/icons/gain/access.png';


const GainSection = () => {

    const GAIN_CONTENT = [
        {
            id: 1,
            img: video,
            header: '25K+ Online Video Courses',
            content: 'Leo condimentum dignissim venenatis sit dignissim vel. Adipiscing tristique dictum vitae elementum neque.',
        },
        // {
        //     id: 2,
        //     img: mentor,
        //     header: 'Mentor-Based Learning',
        //     content: 'Ac dapibus lacus, malesuada ridiculus donec condimentum nunc vestibulum. Mi feugiat tellus faucibus fermentum mattis ultrices.',
        // }, {
        //     id: 3,
        //     img: access,
        //     header: 'Lifetime Access',
        //     content: 'Donec interdum risus convallis tristique quis elit. Sapien turpis enim, viverra cursus facilisis dignissim condimentum.',
        // },
    ];

    return (
        <>
            <section className={style.gainSectionContainer}>
                <div className={style.gainSectionContainer__header}>
                    <h2 className={style.gainSectionContainer__header__h2}>
                        What You Get
                    </h2>
                </div>
                {GAIN_CONTENT.map((val) => (
                    <Gain
                        key={val.id}
                        img={val.img}
                        header={val.header}
                        content={val.content}
                    />
                ))}
            </section>
        </>
    );
};

export default GainSection;