function Tooltip(props){
    // console.log("props",props);
    return(
        <div id="tooltipDiv" className={props.position} >
            Thanks for hovering! I'm a tooltip
        </div>
    )
}

export default Tooltip