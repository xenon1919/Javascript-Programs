let items =[250,645,300,900,50];
let idx=0;
for(let val of items) {
    
    let offer = val/10;
    items[idx]=items[idx]-offer;
    console.log(`value of index ${idx}= ${items[idx]}`);
    idx++
}
