export const History = (props)=>{
    return (
<div>
        { props.data.map((cmd)=>{
<div>
{console.log("dasdas", cmd)}

    <p>{cmd}</p>
</div>
})}
</div>

    )
}