import { useState, createContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
    const [input, setInput] = useState({
      email: "",
      password: "",
    });
    const [jobs, setJobs] = useState([]);
    const [fetchstatus, setFetchstatus] = useState(true);
    const [skeleton, setSkeleton] = useState(true);


    /** Login */
    const handleInput = (events) => {
      let name = events.target.name;
      let value = events.target.value;
  
      setInput({...input, [name]: value});
    }
  
    const handleLogin = (events) => {
      events.preventDefault()
  
      let {email, password} = input;
  
      axios.post('https://dev-example.sanbercloud.com/api/login', {email, password})
        .then(results => {
          // console.info(results.data.user.name);
          swal({
            title: 'Success Login!',
            text: "Welcome Back Job Hunter!",
            icon: 'success',
          })
          .then(result => {
            let data = results.data;
            Cookies.set('token', data.token, {expires: 1});
            Cookies.set('UserLogin', data.user.name, {expires: 1});

            setInput({
              email: '',
              password: '',
            });
              window.location.href = '/';
          })
        })
        .catch(error => {
          console.info(error);
          alert('Error Login!');
        })
    }
    /** End Login */

    /** Get Data Jobs */
    let fetch = () => {
      axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then(result=> {
          // console.info(result.data.data)
          let jobs = result.data.data;
          setJobs(jobs);
          setSkeleton(false);
        })
        .catch(error => {
          console.info(`Error: ${error}`);
        })
      
        setFetchstatus(false);
    }
    /** End Get Data Jobs */

    let state = {
        input, setInput,
        jobs, setJobs,
        fetchstatus, setFetchstatus,
        skeleton, setSkeleton,
    }

    let handleFunction = {
        handleInput,
        handleLogin,
        fetch,
    }

    return (
        <GlobalContext.Provider value={{
            state,
            handleFunction
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}