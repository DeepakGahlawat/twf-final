// const { distances, costsPerKm, costsPerKmInterCenter, products } = require('./config');
 const {centers,distances}=require('./config');

 function calculateMinCost(req,res) {
    try{

    const order = req.body;
    let totalCost = 0;
    let lastCenter=null;
    
   
    for (const center in centers) {
       
        let centerWeight = -1;
        
        for (const product in order) {
            if (centers[center][product] > 0) {
                
                
                if(lastCenter===null || lastCenter===center){
                    totalCost+=0;
                }else{
                    totalCost+=distances[center]*calculateCostPerUnit(0);
                    lastCenter=center;
                }
                
                centerWeight+= order[product] * centers[center][product];
                
            }
        }
        totalCost+=distances[center]*calculateCostPerUnit(centerWeight);
        lastCenter="L1";
    }
    console.log("Total cost: " + totalCost)
    res.json({ cost: totalCost });
    
}
catch(error){
    res.status(400).json({ error: 'Invalid input data' });
}
}


function calculateCostPerUnit(weight) {
    if(weight===-1){
        return 0;
    }
    let cost = 10;
    if (weight > 5) {
        cost += Math.ceil((weight - 5) / 5) * 8;
    }
    return cost;
}

module.exports = { calculateMinCost };
