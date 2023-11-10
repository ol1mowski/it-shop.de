import Gain from "./Gain/Gain";
import style from "./gainSection.module.scss";
import { GAIN_CONTENT } from "../../data/GainData";

const GainSection = () => {
  const gain = GAIN_CONTENT;

  return (
    <>
      <section className={style.gainSectionContainer}>
        <div className={style.gainSectionContainer__header}>
          <h2 className={style.gainSectionContainer__header__h2}>
            What You Get
          </h2>
        </div>
        <div className={style.gainSectionContainer__gainWrapper}>
          {gain.map((val) => (
            <Gain
              key={val.id}
              img={val.img}
              header={val.header}
              content={val.content}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default GainSection;
