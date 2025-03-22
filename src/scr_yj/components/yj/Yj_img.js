import Yj_styles from './Yj.module.css';

const Yj_img = ({imgName, className}) => {
    
    console.log("./components/yj/Yj_img"); 
    
    return (
            <img src={imgName} className={Yj_styles.className} alt="이미지"></img>
    );
}

export default Yj_img;