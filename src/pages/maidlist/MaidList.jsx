import "./maidlist.css";
import {getallMaids} from "../../urls"
import { useState , useEffect} from "react";
export default function MaidList() {

  const [maids , setmaids ] = useState([]); 

  useEffect(() => {
    fetch(getallMaids)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.success){
        setmaids(data.maids); 
      }
    })
  }, [])
  

  return (
    <div className="userList">
      <div className="container mt-3 mb-4">
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Maid Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      maids.length===0 ? 'No maids , Add Maids to See here  ' :
                      maids.map((maid)=>{
                        return <tr  className="candidates-list">
                        <td className="title">
                          <div className="candidate-list-details">
                            <div className="candidate-list-info">
                              <div className="candidate-list-title">
                                <h5 className="mb-0"><h5 href="#">{`${maid.name}`}</h5></h5>
                              </div>
                              <div className="candidate-list-option">
                                <ul className="list-unstyled">
                                    <li>Maid Id : {maid.maid_id}</li>
                                      <li className="li">Phone : {maid.phone}</li>
                                      <li className="li">{maid.place}</li>
                                      <li className="li">{maid.address}</li>
                                      <li className="li">{maid.zipcode}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      })
                    }
                    {

                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
