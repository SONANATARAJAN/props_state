const {Component} =require("react");


const TablesHeader=()=>{
    return(
        <thead className="thead-light">
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Job
                </th>
                <th>
                    action
                </th>
            </tr>
        </thead>
    )
}

const TableBody=(props)=>{
    const {characterData,removecharecter}= props
   const rows= characterData.map((characters,index)=>{
        return(
        
            <tr key={index} >
                <td>
                    {characters.name}
                </td>
                <td>
                    {characters.job}
                </td>
                <td>
                    <button className="btn btn-primary" onClick={()=>removecharecter(index)} >Delete</button>
                </td>
            </tr>
        )
     
    })
    return(
        <tbody>
            {rows}
        </tbody>
    );
}
class Table extends Component{
    render(){
     const {characterData,removecharecter} = this.props 
        return(
            <div className="container-lg table-responsive-xl">
            <table className="tables  table-bordered   ">
                <TablesHeader />
                <TableBody removecharecter={removecharecter} characterData={characterData} />
            </table>
            </div>
        )
    }

 }

 export default Table;