
exports.isNotEmpty = (str)=>{
    return !(str===undefined || str===null || str.length===0 || str==='');
}

exports.isNotObject = (o)=>{
    return !(typeof o===Object && o.length>0);
}
