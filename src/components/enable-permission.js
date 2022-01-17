import React from 'react';
import ReactDom from 'react-dom';
import classes from './enable-permission.module.css';
const EnablePermission = (props) => {  
  const ModalOverlay = () => {
    return (
      <div className={classes.enablePermission}> 
        <div>
          <span>Please enable location permission in browser and click on the try again button.</span>
        </div>
         <div className={classes.enablePermissionButtons}>
           <button 
              className={classes.enablePermissionBtn} 
              onClick={props.onEnablePermission}
              disabled={props.disableButton}>
              <span>Try Again</span> 
           </button>
         </div>
      </div>  
    );
  };
  return (
    <> 
      { 
        ReactDom.createPortal(<ModalOverlay> </ModalOverlay>, 
          document.getElementById('modal-root')                            
        )
      }
    </>  
  );
}

export default EnablePermission;