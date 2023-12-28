import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ADD_URL, GET_ALL_URLS } from "../utils/Api";

export const ReactiveProg = ()=>{
 
    const [topicDetails,setTopicDetails] = useState({
        topicName :'',
        topicUrl :''
    })
    const [tableData, setTableData] = useState([]);

    
  const handleChange = (e) => {
    const{name, value} = e.target;
    setTopicDetails((prevDetails)=>({
        ...prevDetails,
        [name]:value
    }));
  };
    const submitHandler = (e)=>{
      post()
        e.preventDefault();
        setTableData((prevData) => [...prevData, topicDetails]);
        setTopicDetails({
          topicName: "",
          topicUrl: "",
        });
        
    }
    const post = async()=>{
     const response = await fetch(ADD_URL,{
        method :'POST',
        mode:'cors',
        headers:{
          "Content-Type":"application/json"
        },
        body :JSON.stringify(topicDetails)
      })
      await response.json()
    }
   
    useEffect(()=>{     
      getAll()
      
     
  },[])
  const getAll = async()=>{
    const response = await fetch(GET_ALL_URLS)
    const jsonData = await response.json()
    setTableData(jsonData)
  }
    return(
        <div>
            <h1>Wlecome to Reactive Programming</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="topicName"
                name="topicName" value={topicDetails.topicName} onChange={handleChange}
                />
                <input type="text" placeholder="topicUrl"
                name="topicUrl"value={topicDetails.topicUrl} onChange={handleChange}
                
                />
               
                <button type="submit">save</button>
            </form>
            <table>
                <thead>
                    <tr>
                       <th>topicName</th>
                       <th>topicUrl</th> 
                    </tr>
                </thead>
                <tbody>
                {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.topicName}</td>
              <td>
              {item.topicUrl && (
                    <p>
                      <a href={item.topicUrl} target="_blank" rel="noopener noreferrer">
                        {item.topicUrl}
                      </a>
                    </p>
                  )}
              </td>
            </tr>
          ))}
                </tbody>
            </table>
        </div>
    )
}