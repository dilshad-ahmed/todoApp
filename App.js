import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React , {useState , useEffect} from 'react';
import axios from 'axios';


function App() {
  const [user , setUser] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=> {
    
    async function getData() {
      const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
      console.log(res);
      setUser(res.data.data);
    }
    getData();
  
  },[page])


  return( 
    <>
      <button className="btn btn-info btn-block mx-3" onClick={()=>{ setPage(1)  }}> page 1</button>
      <button className="btn btn-info btn-block" onClick={()=>{ setPage(2)  }}> page 2</button>

      <div className="row align-items-center justify-content-center ">
        {
          user.map((cdata) => {
            return(
              <>
                <div className="col-sm-3 bg-warning ">
                  <div className="card">
                    <img src={cdata.avatar} alt="img"/> 
                    <p> ID : {cdata.id}</p>
                    <h3>Name : {cdata.first_name}</h3>
                    <p> Last name : {cdata.last_name}</p>
                    <p> email  : {cdata.email}</p>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    
    
    </>
  );

}
export default App;
