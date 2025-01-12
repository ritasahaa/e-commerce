import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DLT,ADD,REMOVE } from "../redux/actions/action"
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';


const CardsDetail = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
    // console.log(comparedata);
  }

  // Add quantity/data----
     const send = (e) => {
          // console.log(e);   
          dispatch(ADD(e));
      }


  // Delete the item----
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  }

  // Remove one item-----
  const remove = (item) => {
     dispatch(REMOVE(item))
  }

  useEffect(() => {
    compare();
  }, [id])



  return (
    <div className="container mt-2">
      <h2>Items Details Page</h2>

      <section className="container mt-3">
        <div className="itemsdetails d-flex justify-content-center align-item-center " style={{ marginTop: '100px', textAlign: "justify" }}>

          {
            data.map((ele) => {
              return (
                <div className="col-8 col-md-10 d-flex flex-wrap gap-2">
                  <div className="items_img">
                    <img src={ele.imgdata} alt={ele.rname} />
                  </div>

                  <div className="details">
                    <Table>
                      <tbody>

                        <tr className="d-flex" style={{ gap: "2.3rem" }}>
                          <td>
                            <p> <strong>Restaurant</strong> : {ele.rname} </p>
                            <p> <strong>Price</strong> : ₹ {ele.price} </p>
                            <p> <strong>Dishes</strong> : {ele.address} </p>
                            <p> <strong>Total</strong> : ₹ {ele.price * ele.qnty} </p>

                            <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                              <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}> - </span> 
                              <span style={{fontSize:20 }}> {ele.qnty} </span>
                              <span style={{fontSize:24}} onClick={()=>send(ele)}> + </span>
                            </div>
                          </td>

                          <td>
                            <p> <strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating}★ </span> </p>
                            <p> <strong>Order Review :</strong> <span>{ele.somedata} </span> </p>
                            <p> <strong>Remove :</strong> <span> <i className="fas fa-trash" onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i> </span> </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
    </div>
  )
}

export default CardsDetail