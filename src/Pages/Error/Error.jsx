import { Link } from 'react-router-dom';
import style from './Error.module.scss';

const Error = () => {
    return (
        <>
            <div className={style.container}>
                <h1>
                    404
                </h1>
                <p>
                    Opps this side does't exist!
                </p>
                <Link to={'/'}>Go To Home</Link>
            </div>
        </>
    )
}

export default Error;