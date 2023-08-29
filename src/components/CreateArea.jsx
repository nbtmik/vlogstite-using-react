import React ,  { useState } from 'react'


function CreateArea(props) {

  const[val,setvalue]=useState({
    title:"",
    content:""
  });

  const handleChange=(event)=>{
    const{name,value}=event.target;
    setvalue(prevalue=>{
      return{
        ...prevalue,
        [name]:value
      };
    });
  }

  const submit=(event)=>{
    props.onAdd(val);
    setvalue({
      title:"",
      content:""
    });
    event.preventDefault();
  }

  return(
    <div>
      <div>
        <h2>Home</h2>
        <p>Write your personal Vlog!!!</p>
      </div>
      <div>
        <form>
        <div>
          <label>Title</label><br/>
          <input 
          type="text" 
          name="title"
          onChange={handleChange} 
          placeholder="Title"
          value={val.title}
          />
        </div>
        <div>
          <label>Post</label><br/>
          <textarea 
          name="content" 
          onChange={handleChange}
          placeholder="workitem"
          value={val.content}
          />
        </div>
        <div>
         <button type="submit" onClick={submit}>Publish</button>
        </div>
        </form>
      </div>
    </div>
  )

}

export default CreateArea
