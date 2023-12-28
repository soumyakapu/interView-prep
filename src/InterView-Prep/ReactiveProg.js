import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ADD_URL } from "../utils/Api";

export const ReactiveProg = ()=>{
  const navigate = useNavigate
    const [topicDetails,setTopicDetails] = useState({
        topic :'',
        topicUrl :''
    })
    const [tableData, setTableData] = useState([]);
    const [url, setUrl] = useState("");
    // const changeHandler = (e)=>{
    //     const{name, value} = e.target;
    //     setTopicDetails((prevDetails)=>({
    //         ...prevDetails,
    //         [name]:value
    //     }));
    // }
    
  const handleChange = (e) => {
    setUrl(e.target.value);
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
          topic: "",
          topicUrl: "",
        });
        
    }
    const post = async()=>{
     const response = await fetch(ADD_URL,{
        method :'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body :JSON.stringify(topicDetails)
      })
      await response.json()
         navigate('/reactive')
    }
    return(
        <div>
            <h1>Wlecome to Reactive Programming</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="topicName"
                name="topic" value={topicDetails.topic} onChange={handleChange}
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
              <td>{item.topic}</td>
              <td>
              {url && (
                    <p>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                      </a>
                    </p>
                  )}
              </td>
            </tr>
          ))}
                </tbody>
            </table>
            <Link to ="https://medium.com/sysco-labs/reactive-programming-in-java-8d1f5c648012">Fundamentals of Reactive Programming</Link>
        </div>
    )
}