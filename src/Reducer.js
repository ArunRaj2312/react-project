export const initialstate={
    gallery:[],
    minValue:0,
    maxValue:10000000,
    residential:[{residential:'Flat',check:true},{residential:'House/Villa',check:true},{residential:'Plot',check:true}],
    bhk:[{bhk:'1',check:true},{bhk:'2',check:true},{bhk:'3',check:true},{bhk:'4',check:false},{bhk:'5',chech:false},{bhk:'6',check:false},]
}

export const stateReducer=(state,action)=>{
    
    switch(action.type){
        case 'apiUpload':
            //  console.log('apiUpload')
            return{
                ...state,
                gallery:action.payload   
            }
        case 'minValue':
            // console.log('minValue',action.payload)
            return{
                ...state,
                minValue:action.payload
            }
        case 'maxValue':
            // console.log('maxValue',action.payload)
            return{
                ...state,
                maxValue:action.payload
            }
        case 'resident':
            // console.log('action',action.payload);
           var z=[...state.residential]
            z[action.payload.index].check=action.payload.check
            return{
                ...state,
                residential:z
            }
        case 'place':
            // console.log('action',action.payload);
           var x=[...state.bhk]
            x[action.payload.index].check=action.payload.check
            return{
                ...state,
                bhk:x
            }
        default :
            return{
                ...state
            }
    }
}