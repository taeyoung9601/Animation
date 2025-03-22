import tiger from '../Images/tiger.png';
import styles from './Tiger.module.css';


function Tiger() {
    return (
        <>
      
       <div className={styles.images}>
           
            <img src={tiger} className={styles.tiger}/>
                       
        </div>
        
        </>
   
               )
  }
  
  export default Tiger;