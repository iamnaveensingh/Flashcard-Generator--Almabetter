export const createGroup= (data)=>{
    return{
        type: "CREATE_GROUP",
        payload:{
            id: new Date().getTime().toString(),
            data:data,
        }

    }
}


export const deleteGroup= (id)=>{
    return{
        type: "DELETE_GROUP",
        id
    }
}