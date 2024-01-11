import { useState } from "react";
import axios from 'axios';

const NewTopic = () => {

  const [title, setTitle] = useState(String);
  const [content, setContent] = useState(String);
  const [allData, setAllData] = useState(null);

  const Submit = (e) => {
    e.preventDefault();

    try {
      axios.post('http://localhost:3001/createPost', { title, content })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={Submit}>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
        <textarea onChange={(e) => setContent(e.target.value)} value={content} />
        <button type="submit">Create</button>
      </form>

      <div>
        {
          allData.map((mapAllData) => (
            <div>
              <p>Title: {mapAllData.title} ||||||||||| Content: {mapAllData.content}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default NewTopic;