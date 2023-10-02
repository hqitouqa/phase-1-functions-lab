// Code your solution in this file!
function distanceFromHqInBlocks(n){
    if(n>=42){
        return n-42
    } else{
        return 42-n
    }
    
}
function distanceFromHqInFeet(n){
    if(n>=42){
       return (n-42)*264
    } else{
        return (42-n)*264
    }
    
}
function distanceTravelledInFeet(start,finish){
    if(start>=42){
        return 264*(finish-start)
     } else{
         return 264*(start-finish)
     }
    
    
}
function calculatesFarePrice(start,destination){
    let distanceInFeet=(Math.abs(destination-start))*264
    if(distanceInFeet<=400){
        return 0
    }
    if(distanceInFeet>400 && distanceInFeet<2000){
        
        return ((distanceInFeet-400)*0.02)
    } else if(distanceInFeet>=2000 && distanceInFeet<2500){
        return 25

    }else if(distanceInFeet>2500){
        return ('cannot travel that far')
    }
}