import { useSelector } from "react-redux";
import img1 from "../../../../assets/img/slider_image/01.jpg";
import img2 from "../../../../assets/img/slider_image/02.jpg";
import img3 from "../../../../assets/img/slider_image/03.jpg";
import img4 from "../../../../assets/img/slider_image/04.jpg";
import img5 from "../../../../assets/img/slider_image/05.jpg";
import Slide from "./Slide/Slide";
import style from './slider.module.scss';
import { useEffect, useState } from "react";

const Slider = () => {

  const [width, setWidth] = useState(window.innerWidth);



  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const index = useSelector((state) => state.indexSlice.index);



  useEffect(() => {
    console.log(index);

  }, [index])


  const visible1 = () => {
    if (index === 0) {
      return true
    } else {
      return false
    }
  }



  const visible2 = () => {
    if (width >= 560 && width < 768) {
      if (index < 2) {
        return true
      } else {
        return false
      }
    }
    if (width >= 850) {
      if (index < 2) {
        return true
      } else {
        return false
      }
    }
    if (width < 560) {
      if (index === 1) {
        return true
      } else {
        return false
      }
    }
    if (width >= 768) {
      if (index === 1) {
        return true
      } else {
        return false
      }
    }
  }


  const visible3 = () => {
    // if (width >= 1200) {
    //   return true
    // }
    if (width >= 560 && width < 768) {
      if (index < 3 && index !== 0) {
        return true
      } else {
        return false
      }
    }
    if (width >= 1200) {
      if (index < 3) {
        return true
      } else {
        return false
      }
    }
    if (width >= 850) {
      if (index < 3 && index !== 0) {
        return true
      } else {
        return false
      }
    }
    if (width < 560) {
      if (index === 2) {
        return true
      } else {
        return false
      }
    }
    if (width >= 768) {
      if (index === 2) {
        return true
      } else {
        return false
      }
    }
  }



  const visible4 = () => {
    if (width >= 560 && width < 768) {
      if (index >= 4) {
        return true
      } else {
        return false
      }
    }
    if (width >= 1200) {
      if (index >= 1) {
        return true
      } else {
        return false
      }
    }
    if (width >= 850) {
      if (index < 4) {
        return true
      } else {
        return false
      }
    }
    if (width < 560) {
      if (index === 3) {
        return true
      } else {
        return false
      }
    }
    if (width >= 768) {
      if (index === 3) {
        return true
      } else {
        return false
      }
    }
  }
  const visible5 = () => {
    if (width >= 560 && width < 768) {
      if (index < 5 && index !== 0 && index !== 1) {
        return true
      } else {
        return false
      }
    }
    if (width >= 1200) {
      if (index >= 2) {
        return true
      } else {
        return false
      }
    }
    if (width >= 850) {
      if (index < 5 && index !== 0 && index !== 1 && index !== 2) {
        return true
      } else {
        return false
      }
    }
    if (width < 560) {
      if (index === 4) {
        return true
      } else {
        return false
      }
    }
    if (width >= 768) {
      if (index === 4) {
        return true
      } else {
        return false
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
      display: visible1(),
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
      display: visible2(),
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
      display: visible3(),
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
      display: visible4(),
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
      display: visible5(),
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
          display={item.display}
        />)}
      </div>
    </>
  );
};

export default Slider;
