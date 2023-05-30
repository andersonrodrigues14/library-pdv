import { useEffect, useState } from "react";
import { ApiService } from "../../services/ApiService";



export function useSales(){
    function createData(note_number, date, client, seller, protein) {
        return { note_number, date, client, seller, protein };
    }
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    const [listSales, setListSales] = useState([]);

    useEffect(()=>{
        ApiService.get('salesList/').then((response) => {
            var list_return = []
            for(var index in response.data) {
                //console.log('aaaa', response.data[index])
                list_return.push(createData(response.data[index].note_number,response.data[index].date,response.data[index].client,response.data[index].seller,'1'))
            }
            console.log('aquiiii', list_return)
            setListSales(list_return)
        }) .catch(function (error) {
            if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        });
    },[])

    return{
        listSales
    }
}