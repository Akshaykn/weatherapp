import classes from './corosal.module.css';
const Corosal = (props) => { 
  return (
    <div className={classes.corosal} >
      <div className={classes.corosalInner} id="scrollContainer">  
       { props.children }  
      </div>
    </div>  
  );
};

export default Corosal;