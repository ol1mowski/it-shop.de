import { useDispatch, useSelector } from "react-redux";
import img1 from "../../../../assets/img/slider_image/01.jpg";
import img2 from "../../../../assets/img/slider_image/02.jpg";
import img3 from "../../../../assets/img/slider_image/03.jpg";
import img4 from "../../../../assets/img/slider_image/04.jpg";
import img5 from "../../../../assets/img/slider_image/05.jpg";
import Slide from "./Slide/Slide";
import style from './slider.module.scss';
import { useEffect, useState } from "react";
import { changeWidth } from '../../../../store/widthState';

const Slider = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [indexNew, setIndexNew] = useState(0);

  const dispatch = useDispatch()




  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      dispatch(changeWidth(newWidth))
    };
  
    // Nasłuchuj na zmiany rozmiaru okna
    window.addEventListener('resize', handleResize);
  
    // Wywołaj funkcję zaraz po załadowaniu strony
    window.addEventListener('load', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);
  

  const index = useSelector((state) => state.indexSlice.index);



  useEffect(() => {
    setIndexNew(index)
  }, [index])

  const slideStyle1 = () => {
    if (indexNew !== 0) {
      return { display: 'none' }
    }
  }

  const slideStyle2 = () => {
    if (width < 560) {
      if (indexNew === 1) {
        return { display: 'block' }
      }
      if (indexNew >= 3) {
        return { display: 'none' }
      }
    }

    if (width >= 850) {
      if (indexNew < 2) {
        return { display: 'block' }
      }
      if (indexNew >= 2) {
        return { display: 'none' }
      }
    }

    if (width >= 768) {
      if (indexNew < 1) {
        return { display: 'none' }
      }
      if (indexNew === 1) {
        return { display: 'block' }
      }
      if (indexNew >= 2) {
        return { display: 'none' }
      }
    }
    if (width >= 560) {
      if (indexNew < 2) {
        return { display: 'block' }
      }
      if (indexNew >= 2) {
        return { display: 'none' }
      }
    }

  }

  const slideStyle3 = () => {
    if (width < 560) {
      if (indexNew === 2) {
        return { display: 'block' }
      }
      if (indexNew >= 4) {
        return { display: 'none' }
      }
    }

    if (width >= 1200) {
      if (indexNew <= 2) {
        return { display: 'block' }
      }
      if (indexNew >= 2) {
        return { display: 'none' }
      }
    }

    if (width >= 850) {
      if (indexNew < 3 && indexNew >= 1) {
        return { display: 'block' }
      }
      if (indexNew >= 3) {
        return { display: 'none' }
      }
    }

    if (width >= 768) {
      if (indexNew < 2) {
        return { display: 'none' }
      }
      if (indexNew >= 2 && indexNew < 3) {
        return { display: 'block' }
      }
      if (indexNew >= 3) {
        return { display: 'none' }
      }
    }
    if (width >= 560) {
      if (indexNew >= 1 && indexNew < 3) {
        return { display: 'block' }
      }
      if (indexNew >= 3) {
        return { display: 'none' }
      }
    }
  }

  const slideStyle4 = () => {
    if (width < 560) {
      if (indexNew === 3) {
        return { display: 'block' }
      }
      if (indexNew >= 5) {
        return { display: 'none' }
      }
    }

    if (width >= 1200) {
      if (indexNew >= 1) {
        return { display: 'block' }
      }
    }

    if (width >= 850 && indexNew >= 2) {
      if (indexNew < 4) {
        return { display: 'block' }
      }
      if (indexNew >= 4) {
        return { display: 'none' }
      }
    }

    if (width >= 768) {
      if (indexNew < 3) {
        return { display: 'none' }
      }
      if (indexNew === 3) {
        return { display: 'block' }
      }
      if (indexNew === 4) {
        return { display: 'none' }
      }
    }
    if (width >= 560) {
      if (indexNew >= 2) {
        return { display: 'block' }
      }
      if (indexNew >= 3) {
        return { display: 'none' }
      }
    }
  }

  const slideStyle5 = () => {
    if (width < 560) {
      if (indexNew === 4) {
        return { display: 'block' }
      }
      if (indexNew !== 5) {
        return { display: 'none' }
      }
    }
    if (width >= 1200) {
      if (indexNew >= 2) {
        return { display: 'block' }
      }
    }


    if (width >= 850 && indexNew >= 3) {
      if (indexNew < 5) {
        return { display: 'block' }
      }
      if (indexNew >= 5) {
        return { display: 'none' }
      }
    }

    if (width >= 768) {
      if (indexNew < 4) {
        return { display: 'none' }
      }
      if (indexNew >= 4 && indexNew < 5) {
        return { display: 'block' }
      }
      if (indexNew >= 4) {
        return { display: 'none' }
      }
    }

    if (width >= 560) {
      if (indexNew >= 3) {
        return { display: 'block' }
      }
      if (indexNew >= 4) {
        return { display: 'none' }
      }
    }
  }


  const COURSES_INFO = [
    {
      id: 1,
      img: img1,
      bestseller: true,
      title: 'Fullstack Web Developer Course from Scratch',
      autor: 'Albert Flores',
      price: 12.49,
      time: 220,
      rating: 94,
      students: 4.2,
      sale: false,
      oldPrice: 0,
      slideStyle: slideStyle1(),
      tagId: style.id1,
    },
    {
      id: 2,
      img: img2,
      bestseller: false,
      title: 'HTML, CSS, JavaScript Web Developer',
      autor: 'Jenny Wilson',
      price: 15.99,
      time: 160,
      rating: 92,
      students: 3.1,
      sale: false,
      oldPrice: 0,
      tagId: style.id2,
      slideStyle: slideStyle2(),
    },
    {
      id: 3,
      img: img3,
      bestseller: false,
      title: 'HTML, CSS, JavaScript expert Web Developer',
      autor: 'Robert Fox',
      price: 9.99,
      time: 210,
      rating: 98,
      students: 2.7,
      sale: true,
      oldPrice: 44.99,
      tagId: style.id3,
      slideStyle: slideStyle3(),
    },
    {
      id: 4,
      img: img4,
      bestseller: false,
      title: 'Data Science & Machine Learning with Python',
      autor: 'Esther Howard',
      price: 13.99,
      time: 170,
      rating: 96,
      students: 3.8,
      sale: false,
      oldPrice: 0,
      tagId: style.id4,
      slideStyle: slideStyle4(),
    },
    {
      id: 5,
      img: img5,
      bestseller: false,
      title: 'The Ultimate Guide to Unity Game Development',
      autor: 'Albert Flores',
      price: 29.99,
      time: 250,
      rating: 95,
      students: 5.4,
      sale: false,
      oldPrice: 0,
      tagId: style.id5,
      slideStyle: slideStyle5(),
    },
  ];

  return (
    <>
      <div className={style.coursesWrapper}>
        {COURSES_INFO.map((item) => <Slide
          key={item.id}
          img={item.img}
          bestseller={item.bestseller}
          title={item.title}
          autor={item.autor}
          price={item.price}
          time={item.time}
          rating={item.rating}
          students={item.students}
          sale={item.sale}
          slideStyle={item.slideStyle}
          // display={item.display}
          tagId={item.tagId}
          oldPrice={item.oldPrice}
        />)}
      </div>
    </>
  );
};

export default Slider;
