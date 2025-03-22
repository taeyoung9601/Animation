import Yj_img from './Yj_img';
import Yj_styles from './Yj.module.css';


import mo from './Yj_img/moon.png'
import s from './Yj_img/sun.png';
import p1 from './Yj_img/park1.png';
import p2 from './Yj_img/park2.png';
import p3 from './Yj_img/park3.png';
import l from './Yj_img/light.png';
import dog from './Yj_img/dog.png'
import wo from './Yj_img/wo.png'

const Yj = (props) => {


    return (
            <div className={Yj_styles.daybyday}>
                <div className={Yj_styles.dbd}>
                    <div className={Yj_styles.sky}>
                        <div className={Yj_styles.s}>
                        <Yj_img imgName={s}/>
                        </div>
                        <div className={Yj_styles.mo}>
                        <Yj_img imgName={mo}/>
                        </div>

                    </div>
                    <div className={Yj_styles.town}>
                         <div className={Yj_styles.p2}>
                         <Yj_img imgName={p2}/>
                         </div>
                         <div className={Yj_styles.p3}>
                         <Yj_img imgName={p3}/>
                         </div>
                         <div className={Yj_styles.l}>
                         <Yj_img imgName={l}/>
                         </div>
                         <div className={Yj_styles.p1}>
                         <Yj_img imgName={p1}/>
                         </div>
                    </div>
                    <div className={Yj_styles.moving}>
                          <div className={Yj_styles.wo}>
                          <Yj_img imgName={wo}/>
                          <div className={Yj_styles.dog}>
                          <Yj_img imgName={dog}/>
                          </div>
                          </div>
                    </div>
                </div>
                <h1>뽀삐야 어디가</h1>
            </div>
    );
}

export default Yj;