
import axios from "axios";

export const generative = async (content, dispatch) => {
    dispatch({type: "load_active"})
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
  
      };
      
      const body = JSON.stringify({ 
        data: content, 
      });
      
  
  
      const res = await axios.post("http://127.0.0.1:8000/", body, config);

    try {
        
        dispatch({
        type: "GPT_GENERATE",
        payload: res.data,
        });

        dispatch({type: "load_false"})

    } catch (err) {
        dispatch({ type: "GPT_GENERATE_fail" });
        dispatch({type: "load_false"})
    }
    };
  
  